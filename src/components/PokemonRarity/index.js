import { React } from 'react';

const PokemonRarity = ({ rarity }) => {
    return (
        <>
            <p className="rarity">Rarity: {rarity.rarity}</p>
            <div className="version">
                <p className="version-title">Version:</p>
                <p className="version-content">{rarity.version.name.toUpperCase()}</p>
            </div>
        </>
    )
}

export default PokemonRarity;