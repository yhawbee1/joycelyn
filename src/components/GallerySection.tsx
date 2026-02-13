import styles from "./GallerySection.module.css";
import Image from "next/image";

const GallerySection = () => {
  // Using placeholders as per guidelines, but with romantic themes
  const photos = [
    {
      src: "/joycelyn-2.HEIC",
      alt: "Memory 1",
    },
    {
      src: "https://images.unsplash.com/photo-1494774139091-9e1f5ba4e5b3?q=80&w=600",
      alt: "Memory 2",
    },
    {
      src: "https://images.unsplash.com/photo-1516589174184-c685266d430c?q=80&w=600",
      alt: "Memory 3",
    },
    {
      src: "https://images.unsplash.com/photo-1516589174184-c685266d430c?q=80&w=600",
      alt: "Memory 4",
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Our Beautiful Memories</h2>
      <div className={styles.grid}>
        {photos.map((photo, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={300}
              className={styles.image}
              unoptimized // Unsplash images might need this if not configured in next.config
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
