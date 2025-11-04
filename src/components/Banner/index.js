import styles from './Banner.module.css';

function Banner() {
  return (
    <header className={styles.Header}>
      <span>Aula Senac no banner</span>
      <nav>
        <a href="#">Home</a>
        <a href="#">Senac</a>
      </nav>
    </header>
  );
}

export default Banner;