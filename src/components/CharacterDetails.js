// Write your Character component here
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyledMainContainer, Styledh1} from '../App';
import { StyledContent, StyledButton } from './Character';

//opens modal with current selected character 

const CharacterDetails = ({characterUrl, closeStats}) => {

    const[stats, setStats] = useState('')

    useEffect(() => {
        axios.get(characterUrl)
            .then(res => {
                setStats(res.data)
                console.log(res)})
            .catch(err => console.log(err))
            }, [characterUrl])
    
                
  return(              
                <StyledMainContainer>
                    <Styledh1>{stats.name}</Styledh1>
                    <StyledContent>
                        <p>Height: {stats.height}</p>
                        <p>Weight: {stats.mass}</p>
                        <p>{stats.hair_color === ('n/a' || 'none') ? null : `Hair Color: ${stats.hair_color}`}</p>
                        <p>Skin Color: {stats.skin_color}</p>
                        <p>Eye Color: {stats.eye_color}</p>
                        <p>Birth Year: {stats.birth_year}</p>
                        <p>{stats.gender === 'n/a' ? null : `Gender: ${stats.gender}`}</p>
                   </StyledContent>
                   <StyledButton onClick={() => closeStats()}>close</StyledButton>
               </StyledMainContainer>
  );

};

export default CharacterDetails;