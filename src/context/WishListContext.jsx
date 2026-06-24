import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WishListContext = createContext();

function WishListProvider({ children }) {
    const [WishListItems, setWishListItems] = useState([]);

    // 1. Đưa hàm fetchWishlist ra ngoài để có thể gọi lại từ bất kỳ đâu
    const fetchWishlist = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return;

            const response = await axios.get(
                "http://localhost:5000/wishlist",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("WISHLIST RESPONSE:", response.data);

            const responseData = response.data.data || response.data;

            if (Array.isArray(responseData)) {
                setWishListItems(responseData);
            } else {
                setWishListItems([]); 
            }

        } catch (error) {
            console.error("Fetch wishlist error:", error);
            setWishListItems([]);
        }
    };

    useEffect(() => {
        fetchWishlist(); // Vẫn gọi lần đầu khi vừa vào web
    }, []);

    return (
        <WishListContext.Provider
            value={{
                WishListItems,
                setWishListItems,
                fetchWishlist, // 2. Truyền hàm này ra ngoài
            }}
        >
            {children}
        </WishListContext.Provider>
    );
}

export { WishListProvider };