import { React } from 'react';

const PokemonSprites = ({ data }) => {
    return (
        <div className="pokemon-data-sprites">
            <h2>Sprites</h2>
            <div className="pokemon-data-sprites-container">
                {
                    data.sprites.back_default &&
                    <img src={data.sprites.back_default} alt="Pokemon Sprite - Back Default" />
                }
                {
                    data.sprites.front_default &&
                    <img src={data.sprites.front_default} alt="Pokemon Sprite - Front Default" />
                }
                {
                    data.sprites.back_female &&
                    <img src={data.sprites.back_female} alt="Pokemon Sprite - Back Female" />
                }
                {
                    data.sprites.front_female &&
                    <img src={data.sprites.front_female} alt="Pokemon Sprite - Front Female" />
                }
            </div>

            <div className="pokemon-data-sprites-container">
                {
                    data.sprites.back_shiny &&
                    <img src={data.sprites.back_shiny} alt="Pokemon Sprite - Back Shiny" />
                }
                {
                    data.sprites.front_shiny &&
                    <img src={data.sprites.front_shiny} alt="Pokemon Sprite - Front Shiny" />
                }
                {
                    data.sprites.back_shiny_female &&
                    <img src={data.sprites.back_shiny_female} alt="Pokemon Sprite - Back Shiny Female" />
                }
                {
                    data.sprites.front_shiny_female &&
                    <img src={data.sprites.front_shiny_female} alt="Pokemon Sprite - Front Shiny Female" />
                }
            </div>
        </div>
    )
}

export default PokemonSprites;