import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.heart}>❤️</p>
        <p className={styles.text}>Always and Forever</p>
        <p className={styles.subtext}>
          Happiest Valentine&apos;s Day, Nana Adwoa.
        </p>
        <p className={styles.copyright}>&copy; 2026 With All My Love</p>
      </div>
    </footer>
  );
};

export default Footer;
