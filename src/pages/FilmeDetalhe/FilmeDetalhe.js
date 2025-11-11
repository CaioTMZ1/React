import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PageFilms.module.css";

export default function FilmeDetalhe() {
  const { id } = useParams();
  return (
    <div className={styles.page}>
      <h1>Detalhes do Filme {id}</h1>
      <p>Em breve: sinopse, trailer, elenco e recomendações.</p>
    </div>
  );
}
