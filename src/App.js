import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import uuid from 'react-uuid';
import base_url from './constants';
import Character from './components/Character';
import CharacterDetails from './components/CharacterDetails';

const StyledMainContainer = styled.div`
  background-color: ${props => props.theme.accentColor};
  border: solid black .2px;
  border-radius: 40px 0px 40px 0px;
  max-width: 33%;
  margin: auto;
  padding: 0px 30px 30px;
`

const Styledh1 = styled.h1 `
  color: ${props => props.theme.mainColor};
  font-family: ${props => props.theme.headerFont};
  text-shadow: 2px 2px 5px black;
`


const App = () => {

  const[characterList, setCharacters] = useState([]);
  const[currCharacterUrl, setCurrCharacterUrl] = useState('');

  useEffect(() => {
    axios.get(base_url)
      .then(res => {
        setCharacters(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  const openStats = url => {
    setCurrCharacterUrl(url)
  }

  const closeStats = () => {
    setCurrCharacterUrl(null)
  }

  

  return (
    <div className="App">
      <img alt='star wars' src="http://imageshack.com/a/img922/3783/oyvsRd.png" />
      {!currCharacterUrl && 
        <StyledMainContainer> 
        <Styledh1>Characters</Styledh1>
        { characterList.map((character) => {
          return (
            <Character 
              key={uuid()}
              character={character}
              characterList={characterList} 
              openStats={openStats}/> 
          )})}
      </StyledMainContainer> }
      {currCharacterUrl && 
        <CharacterDetails
          characterUrl={currCharacterUrl} 
          closeStats={closeStats} />}
    </div>
  );
}

export default App
export { StyledMainContainer, Styledh1 };
