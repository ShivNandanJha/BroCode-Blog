import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";


const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=All"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        All
      </Link>
      <Link href="/blog?cat=Hacks" className={`${styles.categoryItem} ${styles.fashion}`}>
        Hacks
      </Link>
      <Link href="/blog?cat=Solutions" className={`${styles.categoryItem} ${styles.food}`}>
        Solutions
      </Link>
      <Link href="/blog?cat=Writings" className={`${styles.categoryItem} ${styles.travel}`}>
        Writings
      </Link>
      <Link href="/blog?cat=General" className={`${styles.categoryItem} ${styles.culture}`}>
        General
      </Link>
      <Link href="/blog?cat=Coding" className={`${styles.categoryItem} ${styles.coding}`}>
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
