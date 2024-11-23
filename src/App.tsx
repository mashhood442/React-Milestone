import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
    
    
    <Router>
      
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Skills">Skills</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
        

 <Routes>
         =  <Route index path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
     
    </Router>
    </>
  );
}

export default App;
