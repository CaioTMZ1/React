import React, { useEffect, useState } from "react";
import styles from "./banner.module.css";

const Banner = () => {
  const imagens = [
    "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg", // Vingadores
    "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg", // Cavaleiro das Trevas
    "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", // Interestelar
    "https://image.tmdb.org/t/p/original/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg", // Avatar
    "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg", // The Batman
  ];

  const [imagemAtual, setImagemAtual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImagemAtual((prev) => (prev + 1) % imagens.length);
    }, 5000); // troca a cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url(${imagens[imagemAtual]})`,
      }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Descubra algo incrível hoje</h1>
        <p>Explore séries e filmes selecionados especialmente para você.</p>
        <button>Explorar Agora</button>
      </div>
    </div>
  );
};

export default Banner;
