import React, { useState, useEffect } from 'react';

// UI
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

//Main Componenets
import Search from './components/Search';

//Styling
import './App.css';

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    console.log('logging user from app.js: ',user);
  }, [user])
  return (
    <div className="container">
      <Header />
      <Search getUser={(e) => setUser(e)} />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
