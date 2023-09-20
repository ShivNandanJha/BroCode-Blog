import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        <Image src="/SK8.png" alt="instagram" width={24} height={24} />
        <Image src="/codepen.png" alt="tiktok" width={24} height={24} />
        {/* <Image src="/yo.png" alt="youtube" width={24} height={24} /> */}
      </div>
      <div className={styles.logo}>Bro_CODE</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="mailto:neureto12@gmail.com" className={styles.link}>Contact</Link>
        <Link href="https://portfolio-shivi.netlify.app/" target="_blank" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
