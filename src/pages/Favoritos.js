import React, { useState } from "react";
import { useFavoritos } from "../context/FavoritosContext";
import "./Favoritos.css";

export default function Favoritos() {
  const { favoritos, toggleFavorito } = useFavoritos();
  const [mensagem, setMensagem] = useState("");

  if (favoritos.length === 0) {
    return <h2 className="mensagem-vazia">Nenhum filme favoritado ainda 🎞️</h2>;
  }

  const handleRemover = (filme) => {
    toggleFavorito(filme);
    setMensagem(`❌ ${filme.titulo} foi removido dos favoritos`);
    setTimeout(() => setMensagem(""), 2500);
  };

  return (
    <div className="favoritos-container">
      <h1>🎬 Meus Favoritos</h1>

      {mensagem && <p className="mensagem-favorito">{mensagem}</p>}

      <div className="favoritos-grid">
        {favoritos.map((filme) => (
          <div key={filme.id} className="favorito-card">
            <img src={filme.imagem} alt={filme.titulo} />
            <h3>{filme.titulo}</h3>

            <div className="favorito-botoes">
              <button
                className="assistir"
                data-icon="🎬"
                onClick={() => window.open(filme.trailer, "_blank")}
              >
                Assistir
              </button>
              <button
                className="remover"
                data-icon="❌"
                onClick={() => handleRemover(filme)}
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
