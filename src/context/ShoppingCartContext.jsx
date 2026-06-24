import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // 1. Lôi hàm fetchCart ra ngoài
    const fetchCart = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                setCartItems([]);
                return;
            }

            const response = await axios.get(
                "http://localhost:5000/cart",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("CART RESPONSE:", response.data);

            setCartItems(response.data.data.items || []);
        } catch (error) {
            console.error("Fetch cart error:", error);
            setCartItems([]);
        }
    };

    useEffect(() => {
        fetchCart(); // Gọi lần đầu
    }, []);

    return (
        <ShoppingCartContext.Provider
            value={{
                cartItems,
                setCartItems,
                fetchCart, // 2. Ném ra ngoài cho các trang khác dùng
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
}

export { ShoppingCartProvider };