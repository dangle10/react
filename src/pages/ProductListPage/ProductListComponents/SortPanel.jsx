import React from 'react';
import styles from './SortPanel.module.scss';
import clsx from 'clsx';
import { useContext, useState } from 'react';
import { ProductContext } from '~/context/ProductContext';

function SortPanel() {
    const {
        products,
        filteredProducts,
        setFilteredProducts
    } = useContext(ProductContext);

    const [sortBy, setSortBy] = useState(null);

    const sortOptions = [
        { id: 'price-low', label: 'Price - Low to High' },
        { id: 'price-high', label: 'Price - High to Low' },
        { id: 'newest', label: 'Newest' }
    ];

    const handleSort = (sortType) => {
        setSortBy(sortType);

        const source =
            filteredProducts.length > 0
                ? filteredProducts
                : products;

        const sorted = [...source];

        switch (sortType) {
            case 'price-low':
                sorted.sort((a, b) => a.price - b.price);
                break;

            case 'price-high':
                sorted.sort((a, b) => b.price - a.price);
                break;

            case 'newest':
                sorted.sort((a, b) => b.id - a.id);
                break;

            default:
                break;
        }

        setFilteredProducts(sorted);
    };

    return (
        <div className={clsx(styles.sortPanel)}>
            <h4>Sort By</h4>

            <div className={clsx(styles.sortOptions)}>
                {sortOptions.map((option) => (
                    <button
                        key={option.id}
                        className={clsx(
                            styles.sortOption,
                            sortBy === option.id && styles.active
                        )}
                        onClick={() => handleSort(option.id)}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SortPanel;