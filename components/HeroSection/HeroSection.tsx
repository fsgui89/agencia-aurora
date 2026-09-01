import Image from "next/image";
import styles from "./HeroSection.module.css";

const basePath = process.env.GITHUB_ACTIONS === "true" ? "/agencia-aurora" : "";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Impulsionamos marcas com <span>design e estratégia</span>
          </h1>

          <p>
            Somos uma agência digital focada em resultados. Criamos experiências
            memoráveis para seu público com criatividade, tecnologia e dados.
          </p>

          <a href="#contato" className={styles.button}>
            Fale Conosco
          </a>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src={`${basePath}/hero-aurora.svg`}
            alt="Equipe da Agência Aurora trabalhando em projetos digitais"
            width={560}
            height={420}
            priority
          />
        </div>
      </div>
    </section>
  );
}
