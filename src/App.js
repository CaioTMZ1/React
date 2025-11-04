import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {
  return (
    <Router>
      <Header />
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/banner">Banner</Link> |{" "}
        <Link to="/footer">Footer</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Bem-vindo à Home!</h1>} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
