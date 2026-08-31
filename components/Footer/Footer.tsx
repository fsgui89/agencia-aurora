import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.container}>
        <div>
          <strong>◆ Agência Aurora</strong>
          <p>Design, marketing e tecnologia para impulsionar marcas.</p>
        </div>

        <p>© 2026 Agência Aurora. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}