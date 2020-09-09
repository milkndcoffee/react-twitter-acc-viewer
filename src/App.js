import React from 'react';

// UI
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

//Main Componenets
import Search from './components/Search';

//Styling
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
