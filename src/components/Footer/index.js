import styles from './Footer.module.css';

function Footer() {
  return (
    <header className={styles.Header}>
      <span>Aula Senac no footer</span>
      <nav>
        <a href="#">Home</a>
        <a href="#">Senac</a>
      </nav>
    </header>
  );
}

export default Footer;