"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "To My Dearest Nana Adwoa";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image
          src="/joycelyn-1.jpeg" // High-quality portrait placeholder
          alt="Joycelyn"
          fill
          className={styles.heroImage}
          priority
          unoptimized
        />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Happy <br /> Valentine&apos;s <br /> Day
        </h1>
        <h2 className={styles.subtitle}>
          {typedText}
          <span className={styles.cursor}>|</span>
        </h2>
        <p className={styles.message}>
          Distance is only a test to see how far love can travel. Even though
          miles separate us today, my heart is right there with you, Nana Adwoa.
          This is my small way of letting you know you&apos;re always on my
          mind.
        </p>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll to Discover</span>
        <div className={styles.arrow}></div>
      </div>
    </section>
  );
};

export default HeroSection;
