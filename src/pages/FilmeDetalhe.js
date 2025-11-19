import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFavoritos } from "../context/FavoritosContext";
import { recomendados, populares, novidades } from "../data/filmes";
import "./FilmeDetalhe.css";

function FilmeDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { favoritos, toggleFavorito } = useFavoritos();
  const [mensagem, setMensagem] = useState("");

  const todosOsFilmes = [...recomendados, ...populares, ...novidades];
  const filme = todosOsFilmes.find((f) => f.id === parseInt(id));

  if (!filme) {
    return (
      <div className="detalhe-container">
        <h1>Filme não encontrado</h1>
        <button onClick={() => navigate(-1)} className="btn-voltar">
          Voltar
        </button>
      </div>
    );
  }

  const isFavorito = favoritos.some((fav) => fav.id === filme.id);

  // 🔔 Exibe mensagem de feedback
  const mostrarAviso = (texto) => {
    setMensagem(texto);
    setTimeout(() => setMensagem(""), 2000); // desaparece em 2 segundos
  };

  // 🟡 Manipula clique no botão
  const handleFavoritoClick = () => {
    toggleFavorito(filme);
    mostrarAviso(
      isFavorito
        ? "❌ Removido dos Favoritos"
        : "⭐ Adicionado aos Favoritos"
    );
  };

  return (
    <div className="detalhe-container">
      <div
        className="detalhe-background"
        style={{ backgroundImage: `url(${filme.imagem})` }}
      ></div>
      <div className="efeito-particulas"></div>
      <div className="detalhe-overlay"></div>

      <div className="detalhe-info">
        <h1 className="titulo-filme">{filme.titulo}</h1>

        <div className="detalhes-extra">
          2023 • 2h 10min • Fantasia •{" "}
          <span className="qualidade">4K Ultra HD</span>
        </div>

        <div className="progresso-filme">
          <div className="barra">
            <div className="preenchimento" style={{ width: "95%" }}></div>
          </div>
          <span>95% relevante</span>
        </div>

        <p className="descricao-filme">
          {filme.descricao ||
            "Uma experiência cinematográfica inesquecível. Assista agora no catálogo GoldPlay."}
        </p>

        <div className="botoes">
          <button onClick={() => window.open(filme.trailer, "_blank")}>
            ▶ Assistir
          </button>

          <button onClick={handleFavoritoClick}>
            {isFavorito ? "❌ Remover dos Favoritos" : "⭐ Adicionar aos Favoritos"}
          </button>

          <button onClick={() => navigate(-1)}>↩ Voltar</button>
        </div>
      </div>

      {/* 🔔 Toast de aviso */}
      {mensagem && <div className="toast-aviso">{mensagem}</div>}
    </div>
  );
}

export default FilmeDetalhe;
