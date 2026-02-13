"use client";

import { useEffect, useState } from "react";
import styles from "./FloatingHearts.module.css";

const FloatingHearts = () => {
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
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * (30 - 10) + 10,
      duration: Math.random() * (15 - 5) + 5,
      delay: Math.random() * 10,
      opacity: Math.random() * (0.8 - 0.4) + 0.4,
    }));
    setHearts(newHearts);
  }, []);

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
