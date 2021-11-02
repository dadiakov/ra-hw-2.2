import './App.css';
import products from './products';
import React from 'react';
import Store from './components/Store';

export default function App() {
  return (
    <div>
      <Store products={products} />
    </div>
  );
}

