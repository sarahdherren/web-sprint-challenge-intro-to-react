import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import uuid from 'react-uuid';
import base_url from './constants';
import Character from './components/Character';
import CharacterDetails from './components/CharacterDetails';
import Landing from './components/Landing';


const StyledMainContainer = styled.div`
  position: relative;
  top: -28vh;
  z-index: 2;
  background-color: ${props => props.theme.accentColor};
  border: solid black 1px;
  border-radius: 80px 0px 80px 0px;
  max-width: 45%;
  margin: auto;
  padding: 0px 30px 30px;
  
`
const StyledButton = styled.button `
    max-width: 40%;
    padding: 2.5px 30px;
    margin: 5px auto 0px;
    &:hover {
        background-color: ${props => props.theme.glowColor};
        color: ${props => props.theme.accentColor};
    }
    border-radius: 5px;
    outline: none;
    border-color: ${props => props.theme.glowColor};
    box-shadow: 0 0 10px ${props => props.theme.glowColor};
`

const StyledImage = styled.img`
  position: relative;
  z-index: 2;
  width: 50%;
  height: auto;
`

const Styledh1 = styled.h1 `
  color: ${props => props.theme.mainColor};
  font-family: ${props => props.theme.headerFont};
  text-shadow: 2px 2px 5px black;
`



const App = () => {
  const[wait, setWait] = useState(true);
  const[scrollStart, setScrollStart] = useState(false);
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
    setWait(false);
  }

  const closeModal = () => {
    setWait(true);
  }

  const handlePlay = () =>{
    setScrollStart(true)
    setTimeout(function() {
      setScrollStart(false)
      setWait(false);}, 70000)
  }

  return (
    <div className="App">
      <div className='fade'>
      <StyledImage alt='star wars' src="http://imageshack.com/a/img922/3783/oyvsRd.png" />
      </div>
      {!scrollStart && <StyledButton onClick={() => handlePlay()}>Click here to begin...</StyledButton>}
      { scrollStart && 
      <Landing />
      }
      { !wait && 
        <StyledMainContainer> 
        <Styledh1>Characters</Styledh1>
        { characterList.map((character) => {
          return (
            <Character 
              key={uuid()}
              character={character}
              characterList={characterList} 
              openStats={openStats}
              closeModal={closeModal}/> 
          )})}
      </StyledMainContainer> }
      {currCharacterUrl && 
        <CharacterDetails
          characterUrl={currCharacterUrl} 
          closeStats={closeStats} />}
      <p style={{fontColor: "#F7E61E"}}>credit to https://reactjs.org/tutorial/tutorial.html and https://css-tricks.com/snippets/css/star-wars-crawl-text/</p>
    </div>
  );
}

export default App
export { StyledMainContainer, Styledh1, StyledButton };
