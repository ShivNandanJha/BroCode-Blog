import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="lama blog" width={90} height={90} />
          <h1 className={styles.logoText}>Bro_CODE</h1>
        </div>
        <p className={styles.desc}>
          Welcome to &apos;Bro_CODE, &apos; your gateway to an enriching online
          experience! This is my dedicated blog website, where I proudly
          showcase my latest projects, innovative ideas, and valuable
          experiences. But it&apos;s not just about me &ndash; it&apos;s a
          platform for collaboration. Join our community by logging in and
          sharing your own insights and experiences. Together, we can build a
          collective knowledge base and become part of the Bro_CODE. Dive in,
          explore, and let the journey of knowledge and camaraderie begin.
          We&apos;re excited to have you on board, and we trust you&apos;ll find
          it both enjoyable and enlightening!
        </p>
        <div className={styles.icons}>
          <Link
            href="https://www.linkedin.com/in/shiv-nandan-jha-4179a4251"
            target="_blank"
          >
            {" "}
            <Image src = "/linkedin.png" alt = "" width = {18} height = {18} />
          </Link>
          <Link href="https://github.com/ShivNandanJha" target="_blank">
            {" "}
            <Image src="/SK8.png" alt="" width={18} height={18} />{" "}
          </Link>
          <Link href="https://codepen.io/Shivi-Code" target="_blank">
            {" "}
            <Image src="/codepen.png" alt="" width={18} height={18} />
          </Link>

          {/* <Image src="/youtube.png" alt="" width={18} height={18} /> */}
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="https://portfolio-shivi.netlify.app/" target="_blank">
            About
          </Link>
          <Link href="mailto:neureto12@gmail.com">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=General">General</Link>
          <Link href="/blog?cat=Hacks">Hacks</Link>
          <Link href="/blog?cat=Coding">Coding</Link>
          <Link href="/blog?cat=Writings">Writing</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link
            href="https://www.linkedin.com/in/shiv-nandan-jha-4179a4251"
            target="_blank"
          >
            Linkedin
          </Link>
          <Link href="https://github.com/ShivNandanJha" target="_blank">
            Github
          </Link>
          <Link href="https://codepen.io/Shivi-Code" target="_blank">
            CodePan
          </Link>
          <Link href="/https://www.kaggle.com/shivijha" target="_blank">
            Kaggle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
