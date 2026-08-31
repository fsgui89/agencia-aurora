import styles from "./ServicesSection.module.css";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.icon}>{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
}