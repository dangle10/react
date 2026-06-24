import { useContext } from "react";
import styles from "./Order.module.scss";

import {
    HeaderOrder,
    OrderCard,
    FooterOrder,
} from "~/components";

import { ShoppingCartContext } from "~/context";

function Order() {
    const { cartItems, setCartItems } =
        useContext(
            ShoppingCartContext
        );

    console.log(
        "CART ITEMS:",
        cartItems
    );

    const handleCancelClick = (
        id
    ) => {
        const updatedCartItems =
            cartItems.filter(
                (item) =>
                    item.product_id !== id
            );

        setCartItems(
            updatedCartItems
        );
    };

    return (
        <div>
            <HeaderOrder />

            <div className={styles.order}>
                <div
                    className={
                        styles.titleContainer
                    }
                >
                    <div
                        className={
                            styles.titleLeft
                        }
                    >
                        My
                    </div>

                    <div
                        className={
                            styles.titleMiddle
                        }
                    >
                        Orders
                    </div>

                    <div
                        className={
                            styles.titleRight
                        }
                    >
                        (
                        {
                            cartItems.length
                        }{" "}
                        items)
                    </div>
                </div>

                <div
                    className={styles.card}
                >
                    {cartItems.map(
                        (item) => (
                            <OrderCard
                                key={
                                    item.cart_item_id
                                }
                                id={
                                    item.product_id
                                }
                                image={
                                    item.thumbnail
                                }
                                title={
                                    item.product_name
                                }
                                price={
                                    item.unit_price
                                }
                                brand={`${item.color} - ${item.size}`}
                                cancelClick={
                                    handleCancelClick
                                }
                                time="-"
                                person="Current User"
                            />
                        )
                    )}
                </div>
            </div>

            <FooterOrder />
        </div>
    );
}

export default Order;