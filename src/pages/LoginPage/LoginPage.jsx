import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './LoginPage.module.scss';
import { useAuth } from '../../context/AuthContext'; 
import { jwtDecode } from "jwt-decode";

import LogoBrand from '../../assets/icons/LogoBrand';
import UserIcon from '../../assets/icons/UserIcon'; 
import LockIcon from '../../assets/icons/LockIcon'; 
import Apple from '../../assets/icons/Apple'; 
import FacebookL from '../../assets/icons/FacebookL'; 
import Google from '../../assets/icons/Google';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); 
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [errors, setErrors] = useState({ email: false, password: false });
  const [apiError, setApiError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setApiError("");
    
    const newErrors = {
      email: email.trim() === "",
      password: password.trim() === ""
    };
    
    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      try {
        const response = await axios.post("http://localhost:5000/auth/login", {
          email: email,
          password: password
        });
console.log("LOGIN RESPONSE", response.data);
        // Lấy token từ cục data trả về (theo đúng cấu trúc log bạn gửi)
        const token = response.data.data.access_token;

        if (token) {
          // 1. Lưu token vào máy
          localStorage.setItem('token', token);

          // 2. Mổ bụng token ra xem có gì
          const decoded = jwtDecode(token);
          console.log("TOKEN SAU KHI MỔ:", decoded); // F12 xem dòng này nhé!

          // 3. Lấy tên hiển thị (Ưu tiên lấy full_name từ token, nếu không có thì lấy email)
          const displayName = decoded.full_name || decoded.email.split('@')[0];
          
          // 4. Báo cho hệ thống biết đã login
          login(displayName); 
          navigate('/'); 
        }
        
      } catch (error) {
        if (error.response && error.response.data) {
          setApiError(error.response.data.message || "Invalid email or password!");
        } else {
          setApiError("Server connection failed!");
        }
      }
    }
  };

  return (
    <div className={styles.authLayout}>
      <div className={styles.authContainer}>
        <div className={styles.imageSection}>
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop" 
            alt="Clothing Shop Banner" 
          />
        </div>

        <div className={styles.formSection}>
          <div className={styles.authCard}>
            <div className={styles.logoContainer}>
              <div className={styles.logoBox}>
                <LogoBrand color="#ffffff" />
              </div>
            </div>

            <h1 className={styles.authTitle}>Welcome back to E-Com!</h1>
            <p className={styles.authSubtitle}>Sign in to continue</p>

            <form onSubmit={handleLogin} noValidate>
              {/* Hiển thị lỗi từ Backend */}
              {apiError && <div className={styles.apiErrorBox}>{apiError}</div>}

              {/* Ô Email */}
              <div className={`${styles.inputGroup} ${errors.email ? styles.errorBorder : ''}`}>
                <UserIcon color={errors.email ? "#d32f2f" : "#8b8b8b"} size={20} />
                <input 
                  type="text" 
                  placeholder="Email" 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: false });
                  }}
                />
              </div>
              {errors.email && <span className={styles.errorText}>* Required field</span>}

              {/* Ô Password */}
              <div className={`${styles.inputGroup} ${errors.password ? styles.errorBorder : ''}`}>
                <LockIcon color={errors.password ? "#d32f2f" : "#8b8b8b"} size={20} />
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: false });
                  }}
                />
              </div>
              {errors.password && <span className={styles.errorText}>* Required field</span>}

              <div className={styles.formOptions}>
                <label className={styles.rememberMe}>
                  <input type="checkbox" /> Remember Me
                </label>
                <Link to="/forgot-password" className={styles.forgotPassword}>
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className={styles.btnPrimary}>
                Login
              </button>
            </form>

            <div className={styles.divider}>
              <span>OR</span>
            </div>

            <p className={styles.socialText}>Login using</p>

            <div className={styles.socialLogin}>
              <button type="button" className={`${styles.socialBtn} ${styles.apple}`}>
                <Apple size={32} />
              </button>
              <button type="button" className={`${styles.socialBtn} ${styles.facebook}`}>
                <FacebookL color="#3b5998" size={32} />
              </button>
              <button type="button" className={`${styles.socialBtn} ${styles.google}`}>
                <Google size={32} />
              </button>
            </div>

            <p className={styles.authFooter}>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;