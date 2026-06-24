import {Header,HomeFooter,ParadaPoster,ItemCard,DealOfTheDay,TrendingOfferCard,Banner,ShopByCategory,CommentCard, BlogCard,Desc} from "~/components";
import styles from "./Home.module.scss";
import { useContext, useMemo } from "react";
import { ProductContext } from "~/context/ProductContext";

function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function Home() {
  const { products } = useContext(ProductContext);

  const trendingProducts = useMemo(() => {
    if (!products || products.length === 0) return [];
    return shuffle(products).slice(0, 9);
  }, [products]);

  return (
    <>
      <header>
        <Header />
      </header>

      <div className={styles.content}>
        <ParadaPoster />
      </div>

      <section className={styles.section}>
        <h1 className={styles.title}>Trending Now</h1>
        <div className={styles.trendingContainer}>
          {trendingProducts.map((product) => (
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
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h1 className={styles.title}>Deals of the Day</h1>
        <DealOfTheDay />
      </section>

      <section className={styles.section}>
        <h1 className={styles.title}>Trending Offers</h1>
        <TrendingOfferCard />
      </section>

      <Banner />

      <section className={styles.section}>
        <h1 className={styles.title}>Shop by Categories</h1>
        <ShopByCategory />
      </section>

      <section className={styles.section}>
        <h1 className={styles.title}>What Our Customer Says</h1>
        <CommentCard />
      </section>

      <section className={styles.section}>
        <h1 className={styles.title}>Featured Blogs</h1>
        <BlogCard />
      </section>

      <section className={styles.section}>
        <h1 className={styles.title2}>About Us</h1>
        <Desc />
      </section>

      <footer>
        <HomeFooter />
      </footer>
    </>
  );
}

export default Home;