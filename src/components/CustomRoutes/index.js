import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import PokemonData from '../PokemonData';
import PokemonList from '../PokemonList';
import React from 'react';

const CustomRoutes = () => {
    return (<Router>
        <Routes>
            <Route path='/' element={<PokemonList />} />
            <Route path="/:id" element={<PokemonData />} />
        </Routes>
    </Router>)
}

export default CustomRoutes;