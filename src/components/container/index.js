import React from "react";
import styles from "./container.module.css";

export default function Container({ filmes }) {
  if (!filmes || filmes.length === 0)
    return (
      <p style={{ color: "#FFD700", textAlign: "center" }}>
        Nenhum filme encontrado
      </p>
    );

  return (
    <div className={styles.container}>
      {filmes.map((f) => (
        <div
          key={f.id}
          className={styles.card}
          onClick={() => window.open(f.trailer, "_blank")}
          title={`Assistir trailer de ${f.titulo}`}
        >
          <img src={f.imagem} alt={f.titulo} />
          <h3>{f.titulo}</h3>
        </div>
      ))}
    </div>
  );
}
