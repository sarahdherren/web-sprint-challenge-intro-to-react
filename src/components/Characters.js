import React from 'react';
import uuid from 'react-uuid';
import Character from './Character';

const Characters = (props) => {

    const onClickHandler = (index) => {
        return 
            // <Character 
            //         key={uuid()} 
            //         name={character.name}
            //         height={character.height}
            //         weight={character.mass}
            //         hair={character.hair_color}
            //         skin={character.skin_color}
            //         eyes={character.eye_color}
            //         birth={character.birth_year}
            //         gender={character.gender}
            //         />
        
    }
const { characterList } = props
    return(
        <div>
           { characterList.map((character, index) => {
               return (
                   <div>
                   {character.name}
                    <button onclick={() => onClickHandler(index)}>details</button>
                    </div>
                   
               )
            })
        }
        </div>
    )
}

export default Characters;