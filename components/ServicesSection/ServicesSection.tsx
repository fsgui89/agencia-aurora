import ServiceCard from "./ServiceCard";
import styles from "./ServicesSection.module.css";

const services = [
  {
    id: 1,
    icon: "💻",
    title: "Web Design",
    description:
      "Sites modernos, responsivos e acessíveis, desenvolvidos para conversão e performance.",
  },
  {
    id: 2,
    icon: "📣",
    title: "Marketing Digital",
    description:
      "Campanhas estratégicas orientadas por dados para ampliar alcance e engajamento.",
  },
  {
    id: 3,
    icon: "📈",
    title: "SEO",
    description:
      "Estratégias de conteúdo e otimização técnica para melhorar seu posicionamento.",
  },
  {
    id: 4,
    icon: "🧭",
    title: "Consultoria",
    description:
      "Diagnóstico e planejamento estratégico para acelerar o crescimento do negócio.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Nossos Serviços</h2>

          <p>Soluções completas para acelerar seu crescimento digital.</p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}