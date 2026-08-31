import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>◆</span>
          Agência Aurora
        </a>

        <nav className={styles.nav}>
          <a href="#servicos">Serviços</a>
          <a href="#resultados">Resultados</a>
          <a href="#clientes">Clientes</a>
          <a href="#contato" className={styles.contactButton}>
            Fale Conosco
          </a>
        </nav>
      </div>
    </header>
  );
}