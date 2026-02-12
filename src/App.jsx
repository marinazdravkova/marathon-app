import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';
import RunInfo from './components/RunInfo/RunInfo';
import Footer from './components/Footer/Footer';
import RegisterForm from './components/RegisterForm/RegisterForm';
import News from './components/News/News';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <News />
      <RunInfo />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default App;