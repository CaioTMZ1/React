import styles from "./header.module.css";
import { FaSearch, FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        Aula <span>Senac</span> Play
      </h1>

      <div className={styles.searchBox}>
        <FaSearch className={styles.icon} />
        <input type="text" placeholder="Buscar filmes..." />
      </div>

      <div className={styles.userArea}>
        <FaUserCircle size={26} />
      </div>
    </header>
  );
}

export default Header;
