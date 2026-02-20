import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';
import RunInfo from './components/RunInfo/RunInfo';
import Footer from './components/Footer/Footer';
import RegisterForm from './components/RegisterForm/RegisterForm';
import News from './components/News/News';
import Home from './pages/Home';
import NewsPage from './pages/NewsPage';
import Register from './pages/Register';
import Gallery from './components/Gallery/Gallery';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;