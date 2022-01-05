import { React, createContext, useState } from 'react';
import requests from '../consults.js';

const PokemonContext = createContext();

function PokemonProvider(props) {
    const home = 'https://pokeapi.co/api/v2';

    const [fetchData, setFetchData] = useState({});
    const [isFetching, setIsFetching] = useState(false);
    const [fetchValue, setFetchValue] = useState('');

    async function fetchData_Function() {
        // fetch(home + requests.fetchHome)
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(response => {
        //         console.log(response);
        //         setFetchData(response);
        //         setIsFetching(true);
        //     })
        // return fetchData;
        try {
            const res = await fetch(home + requests.fetchHome);
            const getResponse = await res.json();
            console.log(getResponse);
            setFetchData(getResponse);
            setIsFetching(true);
        }
        catch (error) {
            console.log(error);
        }
        return fetchData;
    }

    async function fetchData_Function_Link() {
        // fetch(home + localStorage.getItem("url"))
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(response => {
        //         console.log(response);
        //         setFetchData(response);
        //         setIsFetching(true);
        //     })
        try {
            const res = await fetch(home + localStorage.getItem("url"));
            const getResponse = await res.json();
            console.log(getResponse);
            setFetchData(getResponse);
            setIsFetching(true);
        }
        catch (error) {
            console.log(error);
        }
        return fetchData;
    }

    function getID(link) {
        let valueToSkip = home.length + 9;
        let url = link.slice(valueToSkip);
        return url;
    }

    function setFetch_Value(link) {
        let valueToSkip = home.length;
        let url = link.slice(valueToSkip);
        localStorage.setItem("url", url);
        setFetchValue(url);
        setIsFetching(false);
    }

    function resetFetching() {
        setIsFetching(false);
    }

    return (
        <PokemonContext.Provider value={
            {
                fetchData,
                setFetchData,
                isFetching,
                setIsFetching,
                fetchData_Function,
                fetchData_Function_Link,
                getID,
                home,
                fetchValue,
                setFetchValue,
                setFetch_Value,
                resetFetching
            }
        }>{props.children}
        </PokemonContext.Provider>
    )
}

export { PokemonContext, PokemonProvider };