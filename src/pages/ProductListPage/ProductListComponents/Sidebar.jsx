import React, { useContext, useState, useEffect } from "react";
import styles from "./Sidebar.module.scss";
import clsx from "clsx";
import { Down } from "~/assets";
import { ProductContext } from "~/context/ProductContext";

function Sidebar() {
  const { products, setFilteredProducts } = useContext(ProductContext);

  const [priceRange, setPriceRange] = useState([0, 80000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);

  // 🧪 DEBUG
  useEffect(() => {
    console.log("PRODUCTS:", products);
    console.log("SAMPLE:", products[0]);
  }, [products]);

  // ✅ BRAND COUNT (FIX)
  const brandCounts = products.reduce((acc, p) => {
    const brand = p.brand || "Unknown";
    acc[brand] = (acc[brand] || 0) + 1;
    return acc;
  }, {});

  // ❌ bỏ color filter luôn (vì bạn đã normalize mất images rồi)
  // nếu muốn dùng lại phải giữ raw

  const discountRanges = [50, 40, 30, 20, 10];

  // ✅ FILTER CHUẨN
  const applyFilters = (brands, discounts, prices) => {
    console.log("APPLY:", { brands, discounts, prices });

    const filtered = products.filter((p) => {
      // price
      if (p.price < prices[0] || p.price > prices[1]) return false;

      // brand
      if (brands.length && !brands.includes(p.brand)) return false;

      // discount
      if (discounts.length) {
        const ok = discounts.some((d) => p.discount >= d);
        if (!ok) return false;
      }

      return true;
    });

    console.log("RESULT:", filtered);
    setFilteredProducts(filtered);
  };

  const handlePriceChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = Number(value);
    setPriceRange(newRange);
    applyFilters(selectedBrands, selectedDiscounts, newRange);
  };

  const handleBrandToggle = (brand) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];

    setSelectedBrands(newBrands);
    applyFilters(newBrands, selectedDiscounts, priceRange);
  };

  const handleDiscountToggle = (d) => {
    const newDiscounts = selectedDiscounts.includes(d)
      ? selectedDiscounts.filter((x) => x !== d)
      : [...selectedDiscounts, d];

    setSelectedDiscounts(newDiscounts);
    applyFilters(selectedBrands, newDiscounts, priceRange);
  };

  const handleClear = () => {
    setSelectedBrands([]);
    setSelectedDiscounts([]);
    setPriceRange([0, 80000]);
    setFilteredProducts(products);
  };

  return (
    <div className={styles.sidebar}>
      <h3>Filters</h3>
      <button onClick={handleClear}>Clear</button>

      {/* PRICE */}
      <div>
        <h4>Price</h4>
        <input
          type="range"
          min={0}
          max={80000}
          value={priceRange[0]}
          onChange={(e) => handlePriceChange(0, e.target.value)}
        />
        <input
          type="range"
          min={0}
          max={80000}
          value={priceRange[1]}
          onChange={(e) => handlePriceChange(1, e.target.value)}
        />
        <p>
          {priceRange[0]} - {priceRange[1]}
        </p>
      </div>

      {/* BRAND */}
      <div>
        <h4>Brand</h4>
        {Object.entries(brandCounts).map(([brand, count]) => (
          <label key={brand}>
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandToggle(brand)}
            />
            {brand} ({count})
          </label>
        ))}
      </div>

      {/* DISCOUNT */}
      <div>
        <h4>Discount</h4>
        {discountRanges.map((d) => (
          <label key={d}>
            <input
              type="checkbox"
              checked={selectedDiscounts.includes(d)}
              onChange={() => handleDiscountToggle(d)}
            />
            {d}%+
          </label>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;