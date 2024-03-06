// App.js
import React from 'react';
import Header from './Components/Header';
import Cards from './Components/Cards';
import { data } from './data';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Cards items={data} />
      <Footer />
    </div>
  );
}

export default App;
