import React from "react";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.textBox}>
          <h1>Descubra algo incrível hoje</h1>
          <p>Explore séries e filmes selecionados especialmente para você.</p>
          <button className={styles.btnPlay}>Explorar Agora</button>
        </div>
      </div>
    </div>
  );
}
