import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/container";
import FilmeDetalhe from "./pages/FilmeDetalhe/FilmeDetalhe";
import { recomendados, populares, novidades } from "./data/filmes.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Banner />

        <main className="content">
          <section className="category">
            <h2>Recomendados</h2>
            <Container filmes={recomendados} />
          </section>

          <section className="category">
            <h2>Populares</h2>
            <Container filmes={populares} />
          </section>

          <section className="category">
            <h2>Novidades</h2>
            <Container filmes={novidades} />
          </section>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
