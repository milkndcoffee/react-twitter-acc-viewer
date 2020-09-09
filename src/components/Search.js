import React, { useState, useEffect } from 'react';

const Search = ({ getUser }) => {
  //states and var initialization
  let twitterLink = 'https://twitter.com/';
  const [user, setUser] = useState('');
  const [profPage, setProfPage] = useState('');
  const [search, setSearch] = useState('');

  //sets up a value for getUser() to transfer
  useEffect(() => {
    getUser(user);
  },[getUser, user]);

  const handleSubmit = e => {
    e.preventDefault();
    setUser(search);
    setProfPage(twitterLink+search);
  }

  return (
    <section className="search-container">
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <label htmlFor="userHandle">@</label>
          <input
            type="text"
            name="search"
            id="userHandle"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="milkndcoffee"
          />
          <input type="submit" value="submit" />
        </form>
      </div>
      {user !== '' ?
        <p>Viewing <a href={profPage}>@{user}</a> </p>:
        <p style={noAccStyle}>No account being viewed at the moment</p>
      }
    </section>
  )
}

const noAccStyle = {
  fontSize : '10pt',
  color : 'gray'
}

export default Search;
