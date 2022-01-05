import { React, useEffect, useContext } from 'react';
import { PokemonContext } from '../PokemonContext';
import { Link } from "react-router-dom";


const PokemonList = () => {
    const { home, fetchData, isFetching, fetchData_Function, setFetch_Value, getID } = useContext(PokemonContext);

    useEffect(() => {
        fetchData_Function();
    }, [home])

    return (
        <div className="pokemon-list-page">
            {
                isFetching && <>
                    <h1>Pokemon List</h1>
                    <ul className="pokemon-list-ul">
                        {
                            fetchData.results.map((result, index) => (
                                <li key={index} className="pokemon-list-li">
                                    <Link className="pokemon-list-button" to={`/:${getID(result.url)}`} onClick={() => { setFetch_Value(result.url) }}>{result.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <p>{fetchData.results.length}/{fetchData.count}</p>
                </>
            }
        </div>
    )
}

export default PokemonList;