// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Contact from './routes/Contact';
import Shop from './routes/Shop';
import App from './App';
import SelectCap from './routes/SelectCap';
import './index.css';
import ProductDetails from './routes/ProductDetails';

const Main = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
      <Route path="/seleccion-de-gorra" element={<SelectCap />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
