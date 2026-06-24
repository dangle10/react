import { Header, ItemCard } from "~/components";
import clsx from "clsx";
import styles from "./ProductOpen.module.scss";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { ProductContext, ShoppingCartContext, WishListContext } from "~/context";

function ProductOpen() {
    const { id } = useParams();

    const { products } = useContext(ProductContext);
    
    // Lấy hàm làm mới (fetch) thay vì lấy hàm set
    const { fetchCart } = useContext(ShoppingCartContext);
    const { fetchWishlist } = useContext(WishListContext);

    const [productDetail, setProductDetail] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [activeTab, setActiveTab] = useState("details");
    const [selectedVariant, setSelectedVariant] = useState(null);
    
    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/products/${id}`
                );
                setProductDetail(response.data.data);
            } catch (error) {
                console.error("Error fetching product detail:", error);
            }
        };

        fetchProductDetail();
    }, [id]);

    if (!productDetail) {
        return (
            <>
                <Header />
                <p>Loading...</p>
            </>
        );
    }

    const product = productDetail;
    const images = product.images || [];
    const sizes = product.variants?.map((v) => v.size) || [];
    const details = product.extra?.product_details || {};
    const specs = product.extra?.specifications || {};

    const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

    const oldPrice = Number(product.base_price) || 0;
    const discount = product.discount_percent || 0;
    const price = discount > 0 ? Math.round(oldPrice * (1 - discount / 100)) : oldPrice;
    const brand = product.brand?.name || "";

    const handleClickCart = async () => {
        try {
            if (!selectedVariant) {
                alert("Please select a size");
                return;
            }

            const token = localStorage.getItem("token");
            if (!token) {
                alert("Please login first");
                return;
            }

            await axios.post(
                "http://localhost:5000/cart",
                {
                    product_variant_id: selectedVariant.id,
                    quantity: 1,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // BÙA MA THUẬT: Gọi lại API cập nhật giỏ hàng ngầm
            if (fetchCart) fetchCart();

            alert("Added to cart");
        } catch (error) {
            console.error("Add to cart error:", error.response?.data);
            alert("Failed to add product to cart");
        }
    };
    
    const handleClickWishlist = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                alert("Please login first");
                return;
            }

            await axios.post(
                "http://localhost:5000/wishlist",
                {
                    product_id: product.id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // BÙA MA THUẬT: Gọi lại API cập nhật wishlist ngầm
            if (fetchWishlist) fetchWishlist();

            alert("Added to wishlist");

        } catch (error) {
            console.error("Add wishlist error:", error.response?.data || error);

            if (error.response?.status === 409) {
                alert("Product already in wishlist");
            } else {
                alert("Failed to add wishlist");
            }
        }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case "details":
                return (
                    <div className={styles.tabContent}>
                        <h4>Product Details</h4>
                        <p>{details.Product_detail || "No details available"}</p>
                        <h4>Size & Fit</h4>
                        <p>{details.Size_Fit || "No data"}</p>
                        <h4>Material & Care</h4>
                        <p>{details.Material_Care || "No data"}</p>
                    </div>
                );
            case "specifications":
                return (
                    <div className={styles.tabContent}>
                        <h4>Specifications</h4>
                        {Object.keys(specs).length > 0 ? (
                            <ul>
                                {Object.entries(specs).map(([key, value]) => (
                                    <li key={key}>
                                        <b>{key}:</b> {value}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No specifications</p>
                        )}
                    </div>
                );
            case "reviews":
                return (
                    <div className={styles.tabContent}>
                        {productDetail.reviews?.length > 0 ? (
                            productDetail.reviews.map((review) => (
                                <div key={review.id}>
                                    <h4>User #{review.user_id}</h4>
                                    <p>⭐ {review.rating}</p>
                                    <p>{review.content}</p>
                                </div>
                            ))
                        ) : (
                            <p>No reviews yet</p>
                        )}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.productMain}>
                    <div className={styles.thumbnails}>
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img.image_url || null}
                                alt="thumbnail"
                                className={clsx(
                                    styles.thumbnail,
                                    selectedImage === index && styles.active
                                )}
                                onClick={() => setSelectedImage(index)}
                            />
                        ))}
                    </div>

                    <div className={styles.mainImage}>
                        <img
                            src={images[selectedImage]?.image_url || null}
                            alt={product.name}
                        />
                    </div>

                    <div className={styles.productInfo}>
                        <h2>{product.name}</h2>
                        <p className={styles.brand}>{brand}</p>

                        <div className={styles.priceWrapper}>
                            <span className={styles.price}>
                                Rs. {price.toLocaleString()}
                            </span>
                            {discount > 0 && (
                                <>
                                    <span className={styles.oldPrice}>
                                        Rs. {oldPrice.toLocaleString()}
                                    </span>
                                    <span className={styles.discount}>
                                        ({discount}% off)
                                    </span>
                                </>
                            )}
                        </div>

                        <div className={styles.sizes}>
                            {product.variants?.map((variant) => (
                                <button
                                    key={variant.id}
                                    className={styles.sizeBtn}
                                    onClick={() => setSelectedVariant(variant)}
                                >
                                    {variant.size}
                                </button>
                            ))}
                        </div>

                        <button onClick={handleClickCart} className={styles.addToCart}>
                            Add To Cart
                        </button>
                        <button onClick={handleClickWishlist} className={styles.addToWishlist}>
                            Add To Wishlist
                        </button>                    
                    </div>
                </div>

                <div className={styles.tabs}>
                    <ul className={styles.tabList}>
                        <li
                            className={activeTab === "details" ? styles.active : ""}
                            onClick={() => setActiveTab("details")}
                        >
                            Details
                        </li>
                        <li
                            className={activeTab === "specifications" ? styles.active : ""}
                            onClick={() => setActiveTab("specifications")}
                        >
                            Specs
                        </li>
                        <li
                            className={activeTab === "reviews" ? styles.active : ""}
                            onClick={() => setActiveTab("reviews")}
                        >
                            Reviews
                        </li>
                    </ul>
                    {renderTabContent()}
                </div>

                <div className={styles.section}>
                    <h3>More Products</h3>
                    <div className={styles.grid}>
                        {relatedProducts.map((p) => (
                            <ItemCard
                                key={p.id}
                                id={p.id}
                                image={p.image}
                                title={p.title}
                                brand={p.brand}
                                price={p.price}
                                discount={p.discount}
                                rating={p.rating}
                            />                            
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductOpen;