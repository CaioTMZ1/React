import React, { useState } from "react";
import styles from "./header.module.css";

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Atualiza em tempo real
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoArea}>
        <img src="/imagens/g_logo.png" alt="GoldPlay Logo" className={styles.logo} />
        <h1 className={styles.title}>GoldPlay</h1>
      </div>

      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Buscar filmes..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <i className="fas fa-search"></i>
      </div>

      <div className={styles.userArea}>
        <i className="fas fa-user-circle"></i>
      </div>
    </header>
  );
}

export default Header;
