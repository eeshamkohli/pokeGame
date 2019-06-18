import React, { Component } from 'react'
import "./Pokecard.css"

const POKE_IMG = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

const padID = (id) => id < 999 ? `00${id}`.slice(-3) : id; 

class Pokecard extends Component {
    render() {
        return (
            <div className="Pokecard">
                <p>{this.props.name}</p>
                <div className="Pokecard-img">
                <img src={`${POKE_IMG}${padID(this.props.id)}.png`} alt={this.props.id}/>
                </div>
                <p className="Pokecard-data">{this.props.type}</p>
                <p className="Pokecard-data">{this.props.exp}</p>
            </div>
        )
    }
}

export default Pokecard
