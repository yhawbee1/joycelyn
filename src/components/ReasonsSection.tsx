import styles from "./ReasonsSection.module.css";

const reasons = [
  {
    title: "Your Kind Heart",
    description:
      "The way you care for everyone around you with such genuine warmth and compassion.",
    icon: "💝",
  },
  {
    title: "Your Radiant Smile",
    description:
      "How it literally lights up the darkest room and immediately makes my day better.",
    icon: "✨",
  },
  {
    title: "Your Strength",
    description:
      "The grace and resilience you show in everything you do is truly inspiring.",
    icon: "🛡️",
  },
  {
    title: "Our Shared Laughs",
    description:
      "Those inside jokes and moments of pure silliness that I cherish so much.",
    icon: "😂",
  },
  {
    title: "Your Support",
    description:
      "How you always believe in me, even when I find it hard to believe in myself.",
    icon: "🤝",
  },
  {
    title: "Your Beautiful Soul",
    description: "Quite simply, everything that makes you who you are.",
    icon: "🌹",
  },
];

const ReasonsSection = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Why I Love You</h2>
      <div className={styles.grid}>
        {reasons.map((reason, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{reason.icon}</div>
            <h3 className={styles.cardTitle}>{reason.title}</h3>
            <p className={styles.description}>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsSection;
