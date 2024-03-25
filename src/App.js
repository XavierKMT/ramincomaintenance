import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import { useRef, useState } from 'react';
import Footer from './components/Footer';
import Contact from './Contact';
import text from './components/TextLanguage.json';

function App() {
  const serviceRef = useRef(null);
  const [lang, setLang] = useState('en');

  const changeLang = () => {
    if (lang === 'en') {
      text.lang = 'fr';
      setLang('fr');
    }
    else {
      text.lang = 'en';
      setLang('en');
    }
  }

  return (
    <div className='background'>
      <Router>
        <Navbar serviceRef={serviceRef} handleLangChange={changeLang}/>
        <Routes>            
          <Route path="/" exact element={<Home ref={serviceRef} />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
