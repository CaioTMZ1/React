import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  // 🔹 Inicializa com valor salvo no localStorage (se existir)
  const [favoritos, setFavoritos] = useState(() => {
    const armazenados = localStorage.getItem("favoritos");
    return armazenados ? JSON.parse(armazenados) : [];
  });

  // 🔹 Atualiza localStorage sempre que favoritos mudar
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  // 🔹 Adiciona ou remove um filme
  const toggleFavorito = (filme) => {
    setFavoritos((prev) => {
      const existe = prev.find((f) => f.id === filme.id);
      if (existe) {
        return prev.filter((f) => f.id !== filme.id);
      } else {
        return [...prev, filme];
      }
    });
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => useContext(FavoritosContext);
