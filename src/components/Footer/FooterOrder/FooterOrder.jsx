import React from "react";
import styles from "./FooterOrder.module.scss";
import { Facebook, Instagram, WhatApps, X, LogoBrand } from "~/assets";
import { Link } from "react-router-dom";

function FooterOrder() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* LEFT - Logo + text */}
        <div className={styles.left}>
          <div className={styles.logoBlock}>
            <LogoBrand color={"#ffffff"} />
            <p className={styles.brandName}>Globex</p>
          </div>

          <p className={styles.copyText}>Globex, 2024. All right reserved</p>
        </div>

        {/* MIDDLE - Columns */}
        <div className={styles.middle}>
          <div className={styles.col}>
            <h4 className={styles.title}>Shopping</h4>
            <ul>
              <li><Link to="/cart">Your cart</Link></li>
              <li><Link to="/orders">your orders</Link></li>
              <li><Link to="/compare">Compared items</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
              <li><Link to="/shipping">Shipping Details</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.title}>More links</h4>
            <ul>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/gift-center">Gift center</Link></li>
              <li><Link to="/buying-guides">Buying guides</Link></li>
              <li><Link to="/new-arrivals">New arrivals</Link></li>
              <li><Link to="/clearance">Clearance</Link></li>
            </ul>
          </div>
        </div>

        {/* RIGHT - Social Icons */}
        <div className={styles.right}>
          <h4 className={styles.title}>Social Media</h4>
          <div className={styles.social}>
            <a href="#"><Facebook /></a>
            <a href="#"><Instagram /></a>
            <a href="#"><WhatApps /></a>
            <a href="#"><X /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default FooterOrder;
