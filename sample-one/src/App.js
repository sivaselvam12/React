import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Product from './Component/Product';
import Contact from './Component/Contact';

function App() {
  return (
    <div className="App">
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    
  </Router>
    
    </div>
  );
}

export default App;
