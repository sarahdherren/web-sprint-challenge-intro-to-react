// Write your Character component here
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyledMainContainer, Styledh2, StyledButton} from '../App';
import { StyledContent } from './Character';

//opens modal with current selected character 



const CharacterDetails = ({characterUrl, closeStats}) => {

    const[stats, setStats] = useState('')

    const position = 4;
    const letter = 's';
    const secureCharUrl = [characterUrl.slice(0, position), letter, characterUrl.slice(position)].join('');
    console.log(secureCharUrl);

    useEffect(() => {
        axios.get(secureCharUrl)
            .then(res => {
                setStats(res.data)
                console.log(res)})
            .catch(err => console.log(err))
            }, [])
    
                
  return(              
                <StyledMainContainer>
                    <Styledh2>{stats.name}</Styledh2>
                    <StyledContent>
                        <div>
                        <p>Height: {stats.height}</p>
                        <p>Weight: {stats.mass}</p>
                        <p>Hair: {stats.hair_color}</p>
                        <p>Skin Color: {stats.skin_color}</p>
                        <p>Eye Color: {stats.eye_color}</p>
                        <p>Birth Year: {stats.birth_year}</p>
                        <p>{stats.gender === 'n/a' ? null : `Gender: ${stats.gender}`}</p>
                        </div>
                   </StyledContent>
                   <StyledButton onClick={() => closeStats()}>close</StyledButton>
               </StyledMainContainer>
  );

};

export default CharacterDetails;