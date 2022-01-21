import React, { Component } from 'react'
import './PokeCard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const padToThree = (number) => {
    return number <=100 ? `00${number}`.slice(-3) : number
}
class PokeCard extends Component {
    render() {
        const {name, id, exp, type} = this.props;
        return (
            <div className='pokecard'>
                <h1 className='pokecard-title'>{name}</h1>
                <div className='pokecard-image'>
                    <img src={`${POKE_API}${padToThree(id)}.png`} alt={name} />
                </div>
                <h4 className='pokecard-data'>Type : {type}</h4>
                <h4 className='pokecard-data'>Experience : {exp}</h4>
            </div>
        )
    }
}

export default PokeCard;
