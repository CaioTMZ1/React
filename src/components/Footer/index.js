import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <span>Aula Senac no Footer</span>
      <nav>
        <a href="#">Home</a>
        <a href="#">Senac</a>
      </nav>
    </footer>
  );
}

export default Footer;
