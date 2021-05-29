import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import base_url from './constants';
import Characters from './components/Characters';


const App = () => {

  const[characters, setCharacters] = useState([]);
  const[currCharacter, setCurrCharacter] = useState('');

  useEffect(() => {
    axios.get(base_url)
      .then(res => {
        setCharacters(res.data)
        console.log(characters)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  const loadDetails = index => {
    setCurrCharacter(index)
  }

  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div>
        <Characters characterList={characters} />
      </div>
    </div>
  );
}

export default App;
