import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../App';

const StyledContent = styled.div`
    font-family: ${props => props.theme.contentFont};
    font-weight: 900;
    padding: 10px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    
`
// displays list of characters from api

const Character = ({openStats, character, closeModal}) => {

  const clickHandler = () => {
    openStats(character.url)
    closeModal()
  }

    return(
        <div>
        <StyledContent>
            {character.name}
            {character.index}
            <StyledButton onClick={() => clickHandler()}>
                stats
            </StyledButton>
        </StyledContent>
        </div>
    )
}

export default Character;
export { StyledContent };