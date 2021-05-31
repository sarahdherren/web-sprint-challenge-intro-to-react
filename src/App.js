import React, { useState, useEffect } from 'react';
import './App.css';
import reactLogo from './images/logo192.png';
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
  border: double #011524 20px;
  border-radius: 80px 0px 80px 0px;
  width: 75%;
  height: auto;
  margin: auto;
  padding: 0% 1% 1%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: center;
  @media (max-height: 800px) {
    top: -50vh;
    padding-bottom: 50px;
  }
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
    background-color: ${props => props.theme.accentColor};
`

const StyledImage = styled.img`
  position: absolute;
  left: 25%;
  width: 50%;
  height: auto;
  @media (max-height: 800px) {
    width: 20%;
    left: 15%;
    top: 2.5%;
  }
`

const Styledh1 = styled.h1 `
  color: ${props => props.theme.mainColor};
  font-family: ${props => props.theme.headerFont};
  text-shadow: 2px 2px 5px black;
  font-size: 4.5rem;
`
const Styledh2 = styled.h2 `
  color: ${props => props.theme.mainColor};
  font-family: ${props => props.theme.headerFont};
  text-shadow: 2px 2px 5px #011524;
  font-size: 1.5rem;
`
const StyledTopImage = styled.img `
  position: relative;
  top: 5vh;
  z-index: 2;
  width: 20%;
  height: auto;
  opacity: .8;
  @media (max-height: 800px) {
    width: 8%;
    left: 30vw;
    top: 3.5vh;
  } 
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
      setWait(false);}, 65000)
  }

  return (
    <div className="App">
      <div className='fade'>
      <StyledTopImage className='App-logo' alt='react' src={reactLogo} />
      <StyledImage alt='star wars' src="http://imageshack.com/a/img922/3783/oyvsRd.png" />
      </div>
      {!scrollStart && <StyledButton onClick={() => handlePlay()}>Click here to begin...</StyledButton>}
      { scrollStart && 
      <Landing />
      }
      { !wait && 
        <StyledMainContainer> 
        <Styledh2>Characters</Styledh2>
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
export { StyledMainContainer, Styledh1, StyledButton, Styledh2 };
