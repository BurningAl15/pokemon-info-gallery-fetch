import { React } from 'react';
import PokemonRarity from '../PokemonRarity';

const ItemsHeld = ({ held_items }) => {
    return (
        <>
            {
                held_items.map((item, index) => (
                    <div key={'item_held' + index} className="pokemon-data-items-held">
                        <p className="pokemon-data-title">Item Name: {item.item.name}</p>
                        <p className="pokemon-data-version">Version Details:</p>
                        <ul className="pokemon-data-item-container">
                            {item.version_details.map((rarity, index) => (
                                <li key={index} className="pokemon-data-item-element">
                                    <PokemonRarity rarity={rarity} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))

            }
        </>
    )
}

export default ItemsHeld;