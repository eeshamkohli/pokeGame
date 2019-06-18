import React, { Component } from 'react'
import Pokecard from './Pokecard'
import "./Pokedex.css";


class Pokedex extends Component {

    render() {
        let pokeCards = this.props.pokemon.map(val => <Pokecard key={val.id} id={val.id} name={val.name} type={val.type} exp={val.base_experience} />)

        console.log(this.props);
        return (
            
            <div className="Pokedex">
            <h1>Pokedex!</h1>
            <p>Total exp: {this.props.exp}</p>
            <p className={this.props.isWinner?'Pokedex-winner':'Pokedex-loser'}>{this.props.isWinner?'Winner!':'Loser'}</p>
            <div className="Pokedex-Cards">
                {pokeCards}
            </div>
            </div>
        )
    }
}

export default Pokedex
