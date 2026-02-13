"use client";

import { useEffect, useState } from "react";
import styles from "./FloatingHearts.module.css";

const FloatingHearts = () => {
  const [mounted, setMounted] = useState(false);
  const [hearts, setHearts] = useState<
    {
      id: number;
      left: number;
      size: number;
      duration: number;
      delay: number;
      opacity: number;
    }[]
  >([]);

  useEffect(() => {
    // Using setTimeout to move the state update out of the synchronous effect body
    // to avoid the "cascading renders" warning.
    const timer = setTimeout(() => {
      setMounted(true);
      setHearts(
        Array.from({ length: 20 }, (_, i) => ({
          id: i,
          left: Math.random() * 100,
          size: Math.random() * (30 - 10) + 10,
          duration: Math.random() * (15 - 5) + 5,
          delay: Math.random() * 10,
          opacity: Math.random() * (0.8 - 0.4) + 0.4,
        })),
      );
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={styles.heart}
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
