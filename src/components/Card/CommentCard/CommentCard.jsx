import styles from './CommentCard.module.scss';
import clsx from 'clsx';
import React, { useState, useContext } from 'react';
import { ProductContext } from '~/context';
import { Star } from '~/assets';

function Comment() {
  const { products = [] } = useContext(ProductContext); // Change 'user' to 'products' to match the context provider
  const [active, setActive] = useState(0);

  // Early return if no data to avoid errors with empty array
  if (!products.length) {
    return <div className={clsx(styles.CommentCard)}>No reviews available</div>;
  }

  const handleNext = () => {
    setActive((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + products.length) % products.length);
  };

  const prevIndex = (active - 1 + products.length) % products.length;
  const nextIndex = (active + 1) % products.length;
  const effectiveData = [products[prevIndex], products[active], products[nextIndex]];

  return (
    <div className={clsx(styles.CommentCard)}>
      <button onClick={handlePrev} className={clsx(styles.nextButton)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M14 18L15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6z" />
        </svg>
      </button>
      {effectiveData.map((x, index) => (
        <Card
          key={index}
          rate={x?.reviewRating?.rating ?? 0} // Use optional chaining and fallback to avoid undefined errors
          image={x?.image?.[0]?.colorImage ?? ''} // Fallback to empty string if missing
          className={clsx(index === 0 && styles.prev, index === 1 && styles.active, index === 2 && styles.next)}
        />
      ))}
      <button className={clsx(styles.nextButton)} onClick={handleNext}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    </div>
  );
}

function Card({ image, rate, className }) {
  return (
    <div className={clsx(styles.card, className)}>
      <div className={clsx(styles.image)}>
        <img src={image} alt="commentor" />
      </div>
      <div className={clsx(styles.rate)}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} color={index < Math.round(rate) ? '#000' : '#fff'} className={clsx(styles.star)} />
        ))}
        <div className={clsx(styles.rateNumber)}>{rate}</div>
      </div>
      <div className={clsx(styles.rateText)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum
        gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien
        et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper
      </div>
    </div>
  );
}

export default Comment;
