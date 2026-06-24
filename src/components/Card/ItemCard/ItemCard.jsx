import React from 'react';
import styles from './ItemCard.module.scss';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';


function ItemCard({ id,image , title, brand , price, discount,rating }) {
    const oldPrice= price-price*discount/100;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/product/${id}`);
    };
    return (
        <div className={clsx(styles.card)} 
            onClick={handleClick}>
            <div className={clsx(styles.imageWrapper)}>
                <img src={image || "https://via.placeholder.com/300"} alt={title} className={clsx(styles.productImage)} />
            </div>
                <div className={clsx(styles.content)}>
                    {title && <h3 className={clsx(styles.title)}>{title}</h3>}
                    <div className={clsx(styles.line)}>
                    {brand && <p className={clsx(styles.brand)}>{brand}</p>}
                    <span className={styles.rating}>
                        {rating} 
                        
                        <svg
                        className={styles.star}
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <g clipPath="url(#clip0_4265_602)">
                            <path
                            d="M9.00016 0L11.8327 5.73833L18.1668 6.66417L13.5835 11.1283L14.6652 17.435L9.00016 14.4558L3.33516 17.435L4.41683 11.1283L-0.166504 6.66417L6.16766 5.73833L9.00016 0Z"
                            fill="#848484"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_4265_602">
                            <rect width="18" height="17" fill="white" />
                            </clipPath>
                        </defs>
                        </svg>
                    </span>
                    </div>
                    <div className={clsx(styles.priceWrapper)}>
                        <span className={clsx(styles.price)}>Rs. {price}</span>
                        {oldPrice && <span className={clsx(styles.oldPrice)}>Rs. {oldPrice}</span>}
                        {discount && <span className={clsx(styles.discount)}>(-{discount})%</span>}
                    </div>
                </div>
        </div>
    );
}

export default React.memo(ItemCard);
