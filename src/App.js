import React, { useState, useEffect } from 'react';

/* 
  PROJECT IS DELAYED,
  TRYING TO LEARN PYTHON THEN FLASK 
  AND ENCORPORATE THE REQUESTED ITEM TO THIS PROGRAM
*/


// UI
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

//Main Componenets
import Search from './components/Search';


//Styling
import './App.css';

//api
const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEY_SECRET = process.env.REACT_APP_API_KEY_SECRET;
const BEARER_TOKEN = process.env.REACT_APP_BEARER_TOKEN;

const oauth_token = process.env.REACT_APP_ACCESS_TOKEN
const oauth_token_secret = process.env.REACT_APP_ACCESS_TOKEN_SECRET


function App() {
  const [user, setUser] = useState('');
  const requestOptions =  new Headers({
    method: 'GET',
    mode: 'same-origin',
    authorization : 'Bearer ' + BEARER_TOKEN,
    redirect: 'follow'
  });
  //change to 'cors' when not testing
  let runningLocal = 'cors';

  useEffect(() => {

    
    fetch("https://api.twitter.com/2/users/by/username/TwitterDec", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    /*
    fetch('https://api.twitter.com/2/users/by/username/:milkndcoffee', {
      method: 'GET',
      mode: runningLocal,
      headers: new Headers({
        'Authorization': 'Bearer ' + BEARER_TOKEN,
        //'Authorization': 'OAuth ' + Buffer.from(BEARER_TOKEN).toString('base64'),
        //'Authorization': 'Basic ' + Buffer.from(API_KEY+':'+API_KEY_SECRET).toString('base64'),
        'Access-Control-Allow-Origin': 'https://api.twitter.com',
        'Access-Control-Allow-Methods': 'GET',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8n'
      }),
    })
      //.then(response => response.json())
      .then(data => {
        alert('loaded');
        console.log(data);
      })
      .catch(err => {
        alert('Fetch failed to load: ', err);
        console.log(err);
      });;*/
  }, [user])
  
  return (
    <div className="container">
      <Header />
      <Search getUser={(e) => setUser(e)} />
      <hr />
      <pre>{process.env.REACT_APP_IS_LOADED}</pre>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
