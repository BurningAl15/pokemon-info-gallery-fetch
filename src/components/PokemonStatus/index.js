import { React } from 'react';
import PokemonTypes from "../PokemonTypes";


const PokemonStatus = ({ data }) => {
    return (
        <div className="pokemon-data-status">
            <h2>Status</h2>
            <PokemonTypes data={data} />
            <h2>Pokemon ID: {data.id}</h2>
            <p>Base Experience: {data.base_experience}</p>
            <p>Pokemon Height: {data.height}</p>
            <p>Pokemon Weight: {data.weight}</p>
        </div>
    )
}

export default PokemonStatus;