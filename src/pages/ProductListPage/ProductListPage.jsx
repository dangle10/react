import React, { useContext, useState } from 'react';
import styles from './ProductList.module.scss';
import { FilterIcon, SortIcon, Sidebar, SortPanel } from './ProductListComponents';
import clsx from 'clsx';
import { Header, ItemCard } from "~/components";
import { ProductContext } from "~/context/ProductContext";


function ProductList() {
    const { products, filteredProducts } = useContext(ProductContext);
    const [showFilter, setShowFilter] = useState(false);
    const [showSort, setShowSort] = useState(false);

    const displayProducts = filteredProducts || products;

    return (
        <div>
            <Header />
            <div className={clsx(styles.SortingContainer)}>
                <FilterIcon isActive={showFilter} onClick={() => setShowFilter(!showFilter)} />
               <div style={{position: "relative"}}>
                <SortIcon isActive={showSort} 
                onClick={() => setShowSort(!showSort)} />
               </div>
            </div>
            {showSort && <div className={clsx(styles.sortDropdown)}>
                <div className={clsx(styles.SortContainer)}>
                <SortPanel />
                </div>
                </div>}

            {/* Wrapper mới để sidebar và productList nằm ngang nhau */}
            <div className={clsx(styles.mainContainer)}>
                {showFilter && (
                    <div className={clsx(styles.sidebar)}>
                        <Sidebar />
                    </div>
                )}
                <div className={clsx(styles.productList, { [styles.withFilter]: showFilter })}>
                    {displayProducts.length > 0 ? (
                        displayProducts.map((product) => (
                         <ItemCard
                           key={product.id}
                           id={product.id}
                           image={product.image}
                           brand={product.brand}
                           title={product.title}
                           price={product.price}
                           discount={product.discount}
                           rating={product.rating}
                         />
                       ))
                    ) : (
                        <p>No products were found that matched the filter.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductList;