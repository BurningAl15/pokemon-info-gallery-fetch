import { React, useEffect, useContext } from 'react';
import Abilities from '../Abilities';
import ItemsHeld from '../ItemsHeld';
import PokemonStatus from '../PokemonStatus';
import { PokemonContext } from '../PokemonContext';
import { BsArrowLeft } from "react-icons/bs";
import PokemonSprites from "../PokemonSprites";
import PokemonStats from "../PokemonStats";
import { Link } from "react-router-dom";
import '../../styles/style.scss';

const PokemonData = () => {
    const { home, fetchData, isFetching, fetchData_Function_Link, resetFetching } = useContext(PokemonContext);

    useEffect(() => {
        fetchData_Function_Link();
    }, [home])

    return (
        <>
            {
                isFetching && <div className="pokemon-data-page">
                    <Link className="pokemon-data-button" to="/" onClick={() => { resetFetching() }}><BsArrowLeft /></Link>
                    <h1 className="pokemon-data-title">{fetchData.name.toUpperCase()}</h1>
                    <div className="pokemon-data-container">
                        <PokemonStatus data={fetchData} />
                        <PokemonSprites data={fetchData} />
                    </div>
                    <PokemonStats data={fetchData} />
                    <Abilities abilities={fetchData.abilities} />
                    <ItemsHeld held_items={fetchData.held_items} />
                </div>
            }
        </>
    )
}

export default PokemonData;