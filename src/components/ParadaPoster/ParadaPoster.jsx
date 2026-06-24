import React, { useState } from "react";
import clsx from "clsx";
import styles from "./ParadaPoster.module.scss";
import { BackGround, WomenPoster, Woman2, Woman3 } from "~/assets";
import { ExploreButton } from "../Buttons";

const slide = [
  { id: 0, image: WomenPoster, title: "PRADA", subtitle: "Big Fashion Festival", discount: "50% - 80% off" },
  { id: 1, image: Woman2, title: "PRADA", subtitle: "Big Fashion Festival", discount: "40% - 100% off" },
  { id: 2, image: WomenPoster, title: "PRADA", subtitle: "Big Fashion Festival", discount: "90% - 100% off" },
  { id: 3, image: Woman3, title: "PRADA", subtitle: "Big Fashion Festival", discount: "20% - 70% off" },
];

function ParadaPoster() {
  const [index, setIndex] = useState(0);

  return (
    
    <div className={styles.paradaPoster}>
      {/* IMAGE */}
      <div className={styles.image}>
        <img src={slide[index].image} alt="Prada Fashion" />
      </div>

      {/* CONTENT */}
      <div
        className={styles.content}
        style={{ backgroundImage: `url(${BackGround})` }}
      >
        <h1 className={styles.title}>{slide[index].title}</h1>
        <h2 className={styles.subtitle}>{slide[index].subtitle}</h2>
        <p className={styles.discount}>{slide[index].discount}</p>
        <ExploreButton  Color={"rgba(34, 34, 34, 1)"}/>
      </div>

      <div className={styles.dots}>
        {slide.map(( i) => (
          <span
            key={i.id}
            className={clsx(styles.dot, {
              [styles.active]: index === i.id,
            })}
            onClick={() => setIndex(i.id)}
          ></span>
        ))}
      </div>
    </div>
     
    
  );
}

export default ParadaPoster;


