import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./container.module.css";

export default function Container({ filmes }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {filmes.map((f) => (
        <div
          key={f.id}
          className={styles.card}
          onClick={() => navigate(`/filme/${f.id}`)}
          title={`Ver detalhes de ${f.titulo}`}
        >
          <img src={f.imagem} alt={f.titulo} />
          <h3>{f.titulo}</h3>
        </div>
      ))}
    </div>
  );
}
