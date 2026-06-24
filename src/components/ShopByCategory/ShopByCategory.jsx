import React from 'react';
import clsx from 'clsx';
import styles from './ShopByCategory.module.scss';
import {AnnaDoe,BlackGuy,BlueHoodie,LeatherJacket,Woman2,Woman3,Dress}from'~/assets';
function ShopByCategory() {
    return ( 
        <div className={clsx(styles.shopByCategory)}>
            <div className={clsx(styles.leftCard)}>
                <img src={AnnaDoe} alt="Anna Doe" />
            </div>
            <div className={clsx(styles.centerCard)}>
                <div className={clsx(styles.topCard)}>
                    <img src={LeatherJacket} alt="Leather Jacket" />
                </div>
                <div className={clsx(styles.bottomCard)}>
                    <img src={BlackGuy} alt="Black Guy" />
                </div>
            </div>
            <div className={clsx(styles.rightCard)}>
                <div className={clsx(styles.topCard)}>
                    <img src={BlueHoodie} alt="Blue Hoodie" />
                </div>
                <div className={clsx(styles.bottomCard)}>
                    <div className={clsx(styles.bottomLeftCard)}>
                        <img src={Woman2} alt="Woman 2" />
                    </div>
                    <div className={clsx(styles.bottomRightCard)}>
                        <img src={Dress} alt="Dress" />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default ShopByCategory;