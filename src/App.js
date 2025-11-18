import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import FilmeDetalhe from "./pages/FilmeDetalhe/FilmeDetalhe";

import { recomendados, populares, novidades } from "./data/filmes";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  // 🔍 Filtragem dinâmica
  const filterMovies = (filmes) => {
    return filmes.filter((filme) =>
      filme.titulo.toLowerCase().includes(searchTerm)
    );
  };

  return (
    <Router>
      <div className="app">
        <Header onSearch={handleSearch} />
        <Banner />

        <main className="content">
          {/* Recomendados */}
          <section className="category">
            <h2>Recomendados</h2>
            <Container filmes={filterMovies(recomendados)} />
          </section>

          {/* Populares */}
          <section className="category">
            <h2>Populares</h2>
            <Container filmes={filterMovies(populares)} />
          </section>

          {/* Novidades */}
          <section className="category">
            <h2>Novidades</h2>
            <Container filmes={filterMovies(novidades)} />
          </section>
        </main>

        <Footer />

        {/* Rotas futuras */}
        <Routes>
          <Route path="/filme/:id" element={<FilmeDetalhe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
