import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <Router>
        <Navbar serviceRef={serviceRef}/>
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
