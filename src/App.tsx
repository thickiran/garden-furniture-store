import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import VeewerTest from './pages/VeewerTest';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/veewer-test" element={<VeewerTest />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;