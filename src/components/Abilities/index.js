import { React } from 'react';
import Ability from '../Ability';

const Abilities = ({ abilities }) => {
    return (
        <div className="pokemon-data-abilities">
            <h2>Abilities</h2>
            <div className="abilities-container">
                {
                    abilities.map((data, index) => (
                        <Ability key={index} data={data} index={index} />
                    ))

                }
            </div>
        </div>
    );
}
export default Abilities;