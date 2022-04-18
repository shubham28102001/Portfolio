import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/resume" exact element={<Resume />} />
          <Route path="*" element={<Home />} />
      </Routes>
      <Footer fontSize='18px'/>
    </Router>
  );
}

export default App;
