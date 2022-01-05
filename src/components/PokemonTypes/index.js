import { React } from 'react';

const PokemonTypes = ({ data }) => {
    return (
        <ul className="pokemon-type-list">
            {
                data.types.map((type, index) => (
                    <li className={"pokemon-type-element " + type.type.name} key={index}>
                        {type.type.name.toUpperCase()}
                    </li>
                ))
            }
        </ul>
    )
}

export default PokemonTypes;