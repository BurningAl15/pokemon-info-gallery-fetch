import { React } from 'react';

const PokemonStats = ({ data }) => {
    return (
        <div className="pokemon-stats">
            <h2>Stats</h2>
            <ul className="pokemon-stats-container">
                {data.stats.map((stat, index) => (
                    <li key={index} className="pokemon-stats-element">
                        <p className="pokemon-stat-element-title">{stat.stat.name}</p>
                        <p className="pokemon-stat-element-description">{stat.base_stat}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PokemonStats;