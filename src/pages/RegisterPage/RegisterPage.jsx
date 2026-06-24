import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './RegisterPage.module.scss';

import LogoBrand from '../../assets/icons/LogoBrand';
import UserIcon from '../../assets/icons/UserIcon'; 
import LockIcon from '../../assets/icons/LockIcon'; 
import EnvelopeIcon from '../../assets/icons/EnvelopeIcon'; 
import Apple from '../../assets/icons/Apple'; 
import FacebookL from '../../assets/icons/FacebookL'; 
import Google from '../../assets/icons/Google'; 

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  const [apiError, setApiError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setApiError("");
    
    // Validate rỗng
    const newErrors = {
      name: formData.name.trim() === "",
      email: formData.email.trim() === "",
      password: formData.password.trim() === "",
      confirmPassword: formData.confirmPassword.trim() === ""
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      // Validate mật khẩu khớp nhau
      if (formData.password !== formData.confirmPassword) {
        setApiError("Passwords do not match!");
        return;
      }

      try {
        await axios.post("http://localhost:5000/auth/register", {
          full_name: formData.name, // Đổi tên trường cho khớp Backend
          email: formData.email,
          password: formData.password
        });

        alert("Registered successfully!"); 
        navigate('/login'); 
        
      } catch (error) {
        if (error.response && error.response.data) {
          setApiError(error.response.data.message || "Registration failed. Email might already exist!");
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
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
            alt="Register Banner" 
          />
        </div>

        <div className={styles.formSection}>
          <div className={styles.authCard}>
            <div className={styles.logoContainer}>
              <div className={styles.logoBox}>
                <LogoBrand color="#ffffff" />
              </div>
            </div>

            <h1 className={styles.authTitle}>Welcome to E-Com!</h1>
            <p className={styles.authSubtitle}>Let's make your account.</p>

            <form onSubmit={handleRegister} noValidate>
              
              {/* Hiển thị lỗi từ Backend */}
              {apiError && <div className={styles.apiErrorBox}>{apiError}</div>}

              {/* Name */}
              <div className={`${styles.inputGroup} ${errors.name ? styles.errorBorder : ''}`}>
                <UserIcon color={errors.name ? "#d32f2f" : "#8b8b8b"} size={20} />
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
              </div>
              {errors.name && <span className={styles.errorText}>* Required field</span>}

              {/* Email */}
              <div className={`${styles.inputGroup} ${errors.email ? styles.errorBorder : ''}`}>
                <EnvelopeIcon color={errors.email ? "#d32f2f" : "#8b8b8b"} size={20} />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
              </div>
              {errors.email && <span className={styles.errorText}>* Required field</span>}

              {/* Password */}
              <div className={`${styles.inputGroup} ${errors.password ? styles.errorBorder : ''}`}>
                <LockIcon color={errors.password ? "#d32f2f" : "#8b8b8b"} size={20} />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
              </div>
              {errors.password && <span className={styles.errorText}>* Required field</span>}

              {/* Confirm Password */}
              <div className={`${styles.inputGroup} ${errors.confirmPassword ? styles.errorBorder : ''}`}>
                <LockIcon color={errors.confirmPassword ? "#d32f2f" : "#8b8b8b"} size={20} />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
              </div>
              {errors.confirmPassword && <span className={styles.errorText}>* Required field</span>}

              <button type="submit" className={styles.btnPrimary} style={{ marginTop: '10px' }}>
                Register
              </button>
            </form>

            <div className={styles.divider}>
              <span>OR</span>
            </div>

            <p className={styles.socialText}>Register using</p>

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
              Already have an account? <Link to="/login">Log In.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;