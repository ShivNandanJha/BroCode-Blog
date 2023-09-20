import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>
          Hey, <span className={styles.brocode}>Bro_CODE </span>here!
        </b>{" "}
        Discover my latest projects, ideas and stories
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className = {styles.textContainer}>
        <h1  className = {styles.postTitle}>
            My name is Shivnandan Jha , your Bro_CODE
          </h1>
          <p className={styles.postDesc}>
            <p>
              Welcome to &apos;Bro_CODE,&apos; your gateway to an enriching online
              experience! This is my dedicated blog website, where I proudly
              showcase my latest projects, innovative ideas, and valuable
              experiences. But it&apos;s not just about me &ndash; it&apos;s a
              platform for collaboration. Join our community by logging in and
              sharing your own insights and experiences. Together, we can build
              a collective knowledge base and become part of the Bro_CODE. Dive
              in, explore, and let the journey of knowledge and camaraderie
              begin. We&apos;re excited to have you on board, and we trust
              you&apos;ll find it both enjoyable and enlightening!
            </p>
          </p>
          <Link
            href="https://portfolio-shivi.netlify.app/"
            target="_blank"
            className={styles.button}
          >
            Visit Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
