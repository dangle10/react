import React from 'react';
import './HeaderOrder.scss';
import { Link } from 'react-router-dom';
import { LogoBrand,ShoppingCartIcon,SaveIcon,Avatar,SearchingIcon } from '~/assets';

function HeaderOrder() {
    return (
        <header className="site-header">
            <div className="site-header__top">
        <div className="container">
          <div className="left">
            <Link to="/" className="brand">
              <LogoBrand color="rgba(0, 36, 130, 1)" />
            </Link>
            <nav className="main-nav" aria-label="Main navigation">
              <Link to="/">Home</Link>
              <Link to="/">Shop</Link>
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
              <Link to="/wishlist" >
                <SaveIcon />
              </Link>
            </button>
            <button className="icon-btn" aria-label="Cart">
                <Link to="/Order">
                  <ShoppingCartIcon />
                </Link>
            </button>
            <div className="profile">
              <img
                src={Avatar}
                alt="avatar"
                className="avatar"
              />
              <span className="username">Anne Doe</span>
            </div>
          </div>
        </div>
      </div>
        </header>
    );
}

export default HeaderOrder;