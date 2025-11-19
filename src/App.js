import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import FilmeDetalhe from "./pages/FilmeDetalhe";
import Favoritos from "./pages/Favoritos";
import { recomendados, populares, novidades } from "./data/filmes";
import { FavoritosProvider } from "./context/FavoritosContext";
import "./App.css";

function AppContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  const handleSearch = (term) => setSearchTerm(term.toLowerCase());
  const filterMovies = (filmes) =>
    filmes.filter((f) => f.titulo.toLowerCase().includes(searchTerm));

  // 🔍 Verifica se estamos na página de detalhes
  const isFilmeDetalhe = location.pathname.startsWith("/filme/");

  return (
    <div className="app">
      <Header onSearch={handleSearch} />

      {/* Só mostra o banner se não estiver na tela de detalhes */}
      {!isFilmeDetalhe && <Banner />}

      <main className="content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className="category">
                  <h2>Recomendados</h2>
                  <Container filmes={filterMovies(recomendados)} />
                </section>

                <section className="category">
                  <h2>Populares</h2>
                  <Container filmes={filterMovies(populares)} />
                </section>

                <section className="category">
                  <h2>Novidades</h2>
                  <Container filmes={filterMovies(novidades)} />
                </section>
              </>
            }
          />
          <Route path="/filme/:id" element={<FilmeDetalhe />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <FavoritosProvider>
        <AppContent />
      </FavoritosProvider>
    </Router>
  );
}

export default App;
