import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import { useRef } from 'react';
import Footer from './components/Footer';
import Contact from './Contact';

function App() {
  const serviceRef = useRef(null);
  return (
    <div className='background'>
      <HashRouter>
        <Navbar serviceRef={serviceRef}/>
        <Routes>            
          <Route path="/" exact element={<Home ref={serviceRef} />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
