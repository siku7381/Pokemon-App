import React, { Component } from 'react';
import PokeCard from './PokeCard';
import './PokeDex.css';

export default class PokeDex extends Component {
    render() {
        const pokecard = this.props.pokemon.map((pok) =>{
            return (
                <PokeCard id={pok.id} type={pok.type} exp ={pok.base_experience} name= {pok.name} />
            );
        })
        let title ;
        if (this.props.isWinner) {
            title = <h1 className='pokedex-winner'>Winning Hand 🎇🎇🎇</h1>
        }
        else{
            title = <h1 className='pokedex-loser'>Losing Hand 😭😭😭</h1>
        }
        return (
            <div className='pokedex'>
                {title}
                <h4>Total Experience is :{this.props.exp}</h4>
                <div className='pokedex-cards'>
                    {pokecard}
                </div>
            </div>
        )
    }
}
