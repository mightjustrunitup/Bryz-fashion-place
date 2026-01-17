import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/ui/Hero';
import AboutUs from './components/ui/AboutUs';
import ProductCard from './components/ui/ProductCard';
import './App.css'; // Creating/Overwriting specific app styles

function App() {
  // Mock data matching the screenshot vibe
  const products = [
    {
      id: 1,
      name: 'Moss Maxi Dress',
      priceUsd: 275.00,
      priceGbp: 210.00,
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Maki Dress',
      priceUsd: 320.00,
      priceGbp: 245.00,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Nymeriah Dress',
      priceUsd: 255.00,
      priceGbp: 195.00,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Selva Maxi Dress',
      priceUsd: 260.00,
      priceGbp: 200.00,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1000&auto=format&fit=crop'
    },
  ];

  return (
    <div className="app">
      <Navbar />
      <div className="section-separator"></div>
      <Hero />
      <AboutUs />

      <main className="container">


        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="action-button-container">
          <button className="btn-shop-main">SHOP</button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
