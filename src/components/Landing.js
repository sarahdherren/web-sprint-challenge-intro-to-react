import React from 'react';
import PlayAudio from './PlayAudio';
import { Styledh1 } from '../App';
import styled, { keyframes } from 'styled-components';
import './Landing.css';

const Scroll = keyframes`
    0% {
        top: 0px;
        transform: rotateX(20deg) translateZ(0);
    }
    100% {
        top: -6000px;
        transform: rotateX(35deg) translateZ(-2500px);
    }
`
const StyledStarWars = styled.section`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: 800px;
    font-size: 300%;
    font-weight: 600;
    letter-spacing: 6px;
    line-height: 200%;
    perspective: 400px;
    text-align: justify;
    color: ${props => props.theme.mainColor};
    font-family: ${props => props.theme.headerFont};
    z-index: 0;
`
const StyledCrawl = styled.div`
    position: relative;
    z-index: 0;
    height: 50vh;
    top: 800px;
    transform-origin: 50% 100%;
    animation: ${Scroll} 90s linear;
`
const StyledTitle = styled.div`
    font-size: 90%;
    text-align: center;
    margin: 0 0 100px;
`

const Landing = () => {




    return(
        <div>
            <PlayAudio />
                <StyledStarWars>
                    <StyledCrawl>
                        <StyledTitle>
                            Cohort webpt29
                            <Styledh1>INTRO TO REACT</Styledh1>
                        </StyledTitle>
                    What feels like a long time ago, in homes all over the world...<br/><br/>
                    It was a period of learning. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 
                    It lets you compose complex UIs from small and isolated pieces of code called “components”. When our data changes, 
                    React will efficiently update and re-render our components. A component takes in parameters, called props (short for “properties”), 
                    and returns a hierarchy of views to display via the render method. The render method returns a description of what you want to see 
                    on the screen. React takes the description and displays the result. In particular, render returns a React element, which is a 
                    lightweight description of what to render.
                    </StyledCrawl>
                </StyledStarWars>
        
        </div>
    )
}

export default Landing;