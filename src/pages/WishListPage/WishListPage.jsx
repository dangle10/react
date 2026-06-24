import { HeaderOrder,ItemCard } from '~/components';
import React from 'react';
import clsx from 'clsx';
import styles from './WishListPage.module.scss';
import { WishListContext } from '~/context';
import { useContext } from 'react';
function WishList() {
    const { WishListItems } = useContext(WishListContext);
    return (  
    <div>
        <HeaderOrder />
        <div className={clsx(styles.wishListContainer)}>
            <div className={clsx(styles.title)}>
                <div className={clsx(styles.titleLeft)}>My</div>
                <div className={clsx(styles.titleRight)}>Wishlist</div>
               
                </div>
            <div className={clsx(styles.itemsContainer)}>
                {WishListItems?.map((item) => (
                    <ItemCard
                        key={item.id}
                        id={item.id}
                        image={item.thumbnail_url}
                        title={item.name}
                        brand={item.brand_name}
                        price={item.final_price}
                        discount={item.discount_percent}
                        rating={item.rating_avg}
                    />
                ))}   
            </div>
        </div>
    </div> 
    );
}

export default WishList;