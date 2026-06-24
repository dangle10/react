import React from 'react';
import styles from './Footer.module.scss';
import { Facebook, Instagram, WhatApps, X, LogoBrand } from '~/assets';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* TOP area */}
        <div className={styles.top}>
          <div className={styles.logo}>
            <LogoBrand color={"rgba(255, 255, 255, 1)"}/>
            <p className={styles.logoText}>Globex</p>
          </div>
          </div>
        {/* MIDDLE area */}
        <div className={styles.middleWrapper}>

        
        <div className={styles.middle}>
          <nav className={styles.columns} aria-label="footer navigation">
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Women</h4>
              <ul className={styles.colList}>
                <li><Link to="/women">All Women</Link></li>
                <li><Link to="/women/skirts">Skirts</Link></li>
                <li><Link to="/women/tshirts">T- Shirts</Link></li>
                <li><Link to="/women/tops">Tops</Link></li>
                <li><Link to="/women/jackets">Jackets</Link></li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Men</h4>
              <ul className={styles.colList}>
                <li><Link to="/men">All Men</Link></li>
                <li><Link to="/men/shirts">Shirts</Link></li>
                <li><Link to="/men/tshirts">T- Shirts</Link></li>
                <li><Link to="/men/shorts">Shorts</Link></li>
                <li><Link to="/men/jackets">Jackets</Link></li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Kids</h4>
              <ul className={styles.colList}>
                <li><Link to="/kids">All Kids</Link></li>
                <li><Link to="/kids/shirts">Shirts</Link></li>
                <li><Link to="/kids/tshirts">T- Shirts</Link></li>
                <li><Link to="/kids/shorts">Shorts</Link></li>
                <li><Link to="/kids/jackets">Jackets</Link></li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>Shopping</h4>
              <ul className={styles.colList}>
                <li><Link to="/cart">Your cart</Link></li>
                <li><Link to="/orders">your orders</Link></li>
                <li><Link to="/compare">Compared items</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li><Link to="/shipping">Shipping Details</Link></li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.colTitle}>More links</h4>
              <ul className={styles.colList}>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/gift-center">Gift center</Link></li>
                <li><Link to="/buying-guides">Buying guides</Link></li>
                <li><Link to="/new-arrivals">New arrivals</Link></li>
                <li><Link to="/clearance">Clearance</Link></li>
              </ul>
            </div>

            <div className={clsx(styles.col, styles.stayTouch)}>
              <h4 className={styles.colTitle}>Stay In Touch</h4>
              <p className={styles.stayText}>
                Stay in touch to get special offers, free giveaways and once in a lifetime deals
              </p>

              <form className={styles.subscribe} onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="footer-email" className={styles.hidden}>Email</label>
                <div className={styles.inputWrap}>
                  <span className={styles.mailIcon} aria-hidden>✉️</span>
                  <input
                    id="footer-email"
                    className={styles.emailInput}
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email address"
                  />
                </div>
              </form>


            </div>
          </nav>
        </div>
        </div>

        {/* BOTTOM area */}
        <div className={styles.bottom}>
          <div className={styles.legal}>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
            <div className={styles.legal}>
            <Link to="/privacy">Privacy Policy</Link>
            </div>

          <div className={styles.rightBottom}>
            <div className={styles.smallSocial}>
              <a href="#" aria-label="Facebook"><Facebook/></a>
              <a href="#" aria-label="Instagram"><Instagram/></a>
              <a href="#" aria-label="WhatsApp"><WhatApps/></a>
              <a href="#" aria-label="X"><X/></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
