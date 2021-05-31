import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '../App';

const StyledContent = styled.div`
    font-family: ${props => props.theme.contentFont};
    font-weight: 900;
    font-size: .85rem;
    padding: 1%;
    display: flex;
    flex-flow: column;
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
            <StyledButton onClick={() => clickHandler()}>
                stats
            </StyledButton>
        </StyledContent>
        </div>
    )
}

export default Character;
export { StyledContent };