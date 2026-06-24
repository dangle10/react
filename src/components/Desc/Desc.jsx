import styles from "./Desc.module.scss";
import clsx from "clsx";
import React from "react";
import { intro } from "~/assets";
function Desc() {
    return ( 
        <div className={clsx(styles.Container)}>
            <div className={clsx(styles.left)}>
                <div className={styles.title}>Business Name </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi 
                    cursus sed sodales molestie proin dictum gravida. Porttitor maecenas
                    tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis
                    eu sed. Sapien et montes, duis tempor euismod augue cras eu eget.
                    Risus suspendisse mauris ullamcorper felis a, quam. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed
                    sodales molestie proin dictum gravida. Porttitor maecenas tincidunt
                    ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed.
                    Sapien et montes, duis tempor euismod augue cras eu eget. Risus 
                    suspendisse mauris ullamcorper felis a, quam.Lorem ipsum dolor sit 
                    amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales
                    molestie proin dictum gravida. Porttitor maecenas</p>
                <div className={clsx(styles.contact)} >
                    <div className={clsx(styles.contactTitle)}>Contact Information</div>
                    <div className={clsx(styles.phone)}>+91 1256378409 </div>
                    <div className={clsx(styles.email)}>Something@random.com</div>
                <div>
                    <button className={clsx(styles.button)}>Directions</button>
                </div>
                </div>
            </div>
            <div className={clsx(styles.right)}>
                <img src={intro} alt="intro" />
            </div>
        </div>
     );
}

export default Desc;