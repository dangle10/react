import { useState } from "react";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "~/context/AuthContext"; // Import hook lấy Auth
// Thêm UserIcon vào phần import
import { LogoBrand, HeartIcon, SearchingIcon, ShoppingCartIcon, DeleteButton, UserIcon } from "~/assets";

function Header() {
  const [show, setShow] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State quản lý Dropdown
  
  const { user, logout } = useAuth(); // Lấy data từ Context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    // Bạn muốn load lại trang khi logout, dùng dòng này:
    window.location.reload(); 
  };

  return (
    <header className="site-header">
      <div className="site-header__top">
        <div className="container">
          <div className="left">
            <Link to="/" className="brand">
              <LogoBrand color="rgba(0, 36, 130, 1)" />
            </Link>
            <nav className="main-nav" aria-label="Main navigation">
              <Link to="/">Men</Link>
              <Link to="/">Women</Link>
              <Link to="/">Kids</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/">Contact us</Link>
            </nav>
          </div>

          <div className="center">
            <div className="search">
              <input type="search" placeholder="Search here" aria-label="Search" />
              <button className="search-btn" aria-label="Search button">
                <SearchingIcon />
              </button>
            </div>
          </div>

          <div className="right">
            <button className="icon-btn" aria-label="Wishlist">
              <Link to="/wishlist">
                <HeartIcon color={"black"} />
              </Link>
            </button>
            <button className="icon-btn" aria-label="Cart">
              <Link to="/Order">
                <ShoppingCartIcon />
              </Link>
            </button>
            
            {/* KHU VỰC USER TRỞ THÀNH DROPDOWN */}
            <div className="user-dropdown-wrapper">
              <div className="profile" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <UserIcon color="black" size={24} />
                {/* Chỉ hiện tên khi đã đăng nhập */}
                {user && <span className="username">{user.name}</span>}
              </div>

              {/* MENU DROPDOWN */}
              {dropdownOpen && (
                <div className="auth-dropdown-menu">
                  {!user ? (
                    <>
                      <button 
                        className="btn-signin" 
                        onClick={() => { setDropdownOpen(false); navigate('/login'); }}
                      >
                        Sign In
                      </button>
                      <button 
                        className="btn-register" 
                        onClick={() => { setDropdownOpen(false); navigate('/register'); }}
                      >
                        Register
                      </button>
                    </>
                  ) : (
                    <button className="btn-logout" onClick={handleLogout}>
                      Log out
                    </button>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
        {show &&
      <div className="site-header__banner">
        <div className="container">
          <div className="promo">
            Invite Friends and get 50% off on your next purchase
            <a href="/" className="invite"> Invite Now</a>
            <button
            onClick={() => setShow(!show)}
            className="promo-close" aria-label="Close"><DeleteButton /></button>
          </div>
        </div>
      </div>
      }
    </header>
  );
}

export default Header;