// Write your Character component here
import React from 'react';
import Characters from './Characters';

const Character = (props) => {
                
  return(              
                <div>
                   Name: {props.name}
                   Height: {props.height}
                   Weight: {props.weight}
                   {props.hair === 'n/a' || 'none' ? null : `Hair Color: ${props.hair}`}
                   Skin Color: {props.skin}
                   Eye Color: {props.eyes}
                   Birth Year: {props.birth}
                   {props.gender === 'n/a' ? null : `Gender: ${props.gender}`} 
               </div>
  );

};

export default Character;