import styles from './banner.module.css';

function Banner() {
  return (
    <section className={styles.Banner}>
      <span>Aula Senac no Banner</span>
      <nav>
        <a href="#">Home</a>
        <a href="#">Senac</a>
      </nav>
    </section>
  );
}

export default Banner;
