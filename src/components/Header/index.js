import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.Header}>
      <span>
        Aula <span style={{ color: '#ffb347' }}>Senac</span>
      </span>
      <nav>
        <a href="#">Home</a>
        <a href="#">Senac</a>
      </nav>
    </header>
  );
}

export default Header;
