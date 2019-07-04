import React from 'react';

const ItemComponent = (props) => {
    console.log('props: ', props.character);
    if(props.character !== undefined){
        return  <div>
        <img src={props.character.image} alt={props.character.name}/>
        <p>{props.character.name}</p>
        <p>{props.character.gender}</p>
        <p>{props.character.species}</p>
        <p>{props.character.status}</p>
        <p>{props.character.location.name}</p>
        <p>{props.character.origin.name}</p>
    </div>
    }else{

        return (
            <p>No hay personaje</p>
        );
    }
}

export default ItemComponent;
