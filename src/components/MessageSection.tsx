import styles from "./MessageSection.module.css";

const MessageSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.letter}>
        <h2 className={styles.title}>My Dearest Nana Adwoa</h2>
        <div className={styles.text}>
          <p>
            Nana Adwoa, being away from you is the hardest thing I&apos;ve ever
            done, but it also makes me realize just how much you mean to me.
            Absence hasn&apos;t dimmed my love; it has only made it grow deeper
            and more resilient.
          </p>
          <p>
            You are my constant, my anchor across the miles. Every call, every
            message, and every thought of you keeps me going until the day we
            can finally bridge this distance.
          </p>
          <p>
            Thank you for being my strength and my home, no matter where we are.
            I love you beyond any measure of distance.
          </p>
        </div>

        <div className={styles.signature}>Always yours, Brian</div>

        <div className={styles.waxSeal}>
          <div className={styles.sealInner}>B</div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
