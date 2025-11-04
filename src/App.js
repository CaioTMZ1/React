import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Container from './components/container'; 
import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <main>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/banner">Banner</Link> |{" "}
          <Link to="/footer">Footer</Link> |{" "}
          <Link to="/container">Container</Link> {/* 🆕 nova rota */}
        </nav>

        <Routes>
          <Route path="/" element={<h1>Bem-vindo à Home!</h1>} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/container" element={<Container />} /> {/* 🆕 */}
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
