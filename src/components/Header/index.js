import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./header.module.css";

export default function Header({ onSearch }) {
  const navigate = useNavigate();
  const location = useLocation(); // 🔹 Captura a rota atual

  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  const irParaPagina = () => {
    if (location.pathname === "/favoritos") {
      navigate("/"); // 🔸 Se já estiver em Favoritos, volta pra Home
    } else {
      navigate("/favoritos"); // 🔸 Se estiver na Home, vai para Favoritos
    }
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo} onClick={() => navigate("/")}>
        <img src="/imagens/g_logo.png" alt="Logo GoldPlay" />
        <h1>GoldPlay</h1>
      </div>

      {/* Campo de busca */}
      <input
        className={styles.search}
        type="text"
        placeholder="Buscar filmes..."
        onChange={handleSearch}
      />

      {/* Botão de alternância */}
      <button
        className={styles.favButton}
        onClick={irParaPagina}
        title={location.pathname === "/favoritos" ? "Voltar à Home" : "Ver meus favoritos"}
      >
        {location.pathname === "/favoritos" ? "🏠 Voltar" : "⭐ Meus Favoritos"}
      </button>
    </header>
  );
}
