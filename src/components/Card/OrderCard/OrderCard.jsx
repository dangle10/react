import styles from './OrderCard.module.scss';
import React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

function OrderCard({id,image, title, price, brand,time,cancelClick,person}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/product/${id}`);
    };
    return ( 
        <div className={clsx(styles.card)}>
            <div className={clsx(styles.imageWrapper)} onClick={handleClick}>
                <img src={image} alt={title} className={clsx(styles.productImage)} />
            </div>
            <div className={clsx(styles.content)}>
                <div className={clsx(styles.details)}> 
                {title && <h3 className={clsx(styles.title)} onClick={handleClick}>{title}</h3>}
                    {brand && <p className={clsx(styles.brand)}>{brand} </p>}
                    <p className={clsx(styles.price)}>Rs. 
                        {price}</p>
                    <p className={clsx(styles.time)}> Ordered Placed on: 
                        <p className={clsx(styles.element)}>{time}</p></p>
                    <p className={clsx(styles.personalInfo)}> Ship to : <p className={clsx(styles.element)}>{person}</p></p>

                <div className={clsx(styles.actions)}>
                    <button className={clsx(styles.reorderButton)} >Add to Cart</button>
                    <a className={clsx(styles.cancelButton)} onClick={() => cancelClick(id)}>Cancel Order</a>
                </div>
                </div>
                <div className={clsx(styles.subcontent)}>
                    <div className={clsx(styles.OrderNumber)}>Order Number : #{id}</div>
                    <a className={clsx(styles.viewDetails)}>View Order Details</a>
                </div>
            </div>
        </div>

     );
}

export default OrderCard;