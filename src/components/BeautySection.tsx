"use client";

import { useState } from "react";
import styles from "./BeautySection.module.css";
import Image from "next/image";

const BeautySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    {
      src: "/joycelyn-5.jpg",
      alt: "You are stunning",
    },
    {
      src: "/joycelyn-2.jpg",
      alt: "Simply beautiful",
    },
    {
      src: "/joycelyn-3.JPG",
      alt: "Your radiant smile",
    },
    {
      src: "/joycelyn-4.JPG",
      alt: "Always in my heart",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length,
    );
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Through My Eyes</h2>
      <p className={styles.subtitle}>
        Even with the miles between us, your beauty and grace remain the most
        beautiful sight I know.
      </p>

      <div className={styles.carouselContainer}>
        <button
          onClick={prevSlide}
          className={styles.navButton}
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m14 7l-5 5l5 5"
            />
          </svg>
        </button>

        <div className={styles.carouselWrapper}>
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {photos.map((photo, index) => (
              <div key={index} className={styles.slide}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={500}
                    height={700}
                    className={styles.image}
                    unoptimized
                  />
                  <div className={styles.overlay}>
                    <p className={styles.caption}>{photo.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className={styles.navButton}
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"
            />
          </svg>
        </button>
      </div>

      <div className={styles.indicators}>
        {photos.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default BeautySection;
