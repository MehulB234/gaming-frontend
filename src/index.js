import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import News from "./pages/News";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import EldenRing from "./pages/EldenRing";
import SpiderMan from "./pages/SpiderMan";
import GameDetail from "./pages/GameDetail";


const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />  
          <Route path="catalog" element={<Catalog />} />
          <Route path="news" element={<News />} /> 
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />  
          <Route path="elden-ring" element={<EldenRing />} />
          <Route path="spider-man-2" element={<SpiderMan />} />
          <Route path="game/:id" element={<GameDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
