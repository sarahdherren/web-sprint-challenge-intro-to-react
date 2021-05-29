import React from 'react';
import styled from 'styled-components';


const StyledContent = styled.div`
    font-family: ${props => props.theme.contentFont};
    font-weight: 900;
    padding: 10px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    
    
    
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
// displays list of characters from api

const Character = ({openStats, character}) => {

  

    return(
        <StyledContent>
            {character.name}
            {character.index}
            <StyledButton onClick={() => openStats(character.url)}>
                stats
            </StyledButton>
        </StyledContent>
    )
}

export default Character;
export { StyledContent, StyledButton };