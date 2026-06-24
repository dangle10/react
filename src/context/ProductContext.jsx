import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

function normalizeProduct(p) {
    return {
        id: p.id,
        slug: p.slug,
        title: p.name,
        image: p.thumbnail_url,
        brand: p.brand_name,
        price: Number(p.final_price) || 0,
        originalPrice: Number(p.base_price) || 0,
        discount: p.discount_percent || 0,
        rating: p.rating_avg || 0,
        raw: p,
    };
}

function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/products/cards?limit=100"
                );

                const normalized =
                    response.data.data.items.map(normalizeProduct);

                setProducts(normalized);
                setFilteredProducts(normalized);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider
            value={{
                products,
                filteredProducts,
                setFilteredProducts,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export { ProductProvider };