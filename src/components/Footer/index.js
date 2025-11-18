import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.box}>
          <h3>GoldPlay</h3>
          <p>Seu universo cinematográfico dourado</p>
          <p className={styles.slogan}>Assista, explore e viva o cinema.</p>
        </div>

        <div className={styles.box}>
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Suporte</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Privacidade</a></li>
          </ul>
        </div>

        <div className={styles.box}>
          <h4>Contato</h4>
          <p>📧 contato@goldplay.com</p>
          <p>📞 +55 (21) 99999-9999</p>
          <p>📍 Rio de Janeiro - RJ</p>
        </div>
      </div>

      <div className={styles.copy}>
        © 2025 GoldPlay. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
