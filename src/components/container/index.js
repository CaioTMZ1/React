import React from "react";
import styles from "./container.module.css";

export default function Container({ filmes }) {
  return (
    <div className={styles.container}>
      {filmes.map((f) => (
        <div
          key={f.id}
          className={styles.card}
          onClick={() => window.open(f.trailer, "_blank")}
          title={`Assistir trailer de ${f.nome}`}
        >
          <img src={f.imagem} alt={f.nome} />
          <h3>{f.nome}</h3>
        </div>
      ))}
    </div>
  );
}
