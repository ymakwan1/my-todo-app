import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UrlForm from './components/UrlForm';
import UrlList from './components/UrlList';
import Analytics from './components/Analytics';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/urls" element={<UrlList />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/shorten" element={<UrlForm />} />
        </Routes>
      </div>
    </Router>
  );
}

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/shorten">Shorten URL</Link>
        </li>
        <li>
          <Link to="/urls">All URLs</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
      </ul>
    </nav>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to URL Shortener App!</p>
    </div>
  );
};

export default App;
