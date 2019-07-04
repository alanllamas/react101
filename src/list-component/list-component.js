import React, { Component } from 'react';
import ItemComponent from '../itemComponent/item-component'


class ListComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            character_list: [],
            api_info: {}
        }
    }

    async getCharacters (){
        let raw_response = await fetch('https://rickandmortyapi.com/api/character/')
        let response = await raw_response.json()
        
        this.setState({
            character_list: response.results,
            api_info : response.info
        })
    }


    render() {
        this.getCharacters()
        // let item = this.state.character_list[0] === undefined ? : ''
        
        
        return (
            // <ItemComponent character={this.state.character_list[0]}></ItemComponent> 
                <ul>
                    {
                        this.state.character_list.map(c => {
                            return <li>
                                <img src={c.image} alt={c.name}/>
                                <p>{c.name}</p>
                            </li>
                        })
                    }
               
                </ul>
        );
    }
}

export default ListComponent;


