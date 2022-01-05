import { React } from 'react';
import { BsHandThumbsDownFill, BsHandThumbsUpFill } from "react-icons/bs";

const Ability = ({ data, index }) => {
    return (
        <div className={data.is_hidden ? 'ability-link yes' : 'ability-link no'}>
            <div className="ability-name">
                <p >Ability {index}: </p>
                <p>{data.ability.name.toUpperCase()}</p>
            </div>
            <div className="ability-container">
                <p className="is-hidden">Is Hidden?: {data.is_hidden ? <BsHandThumbsUpFill /> : <BsHandThumbsDownFill />}</p>
                <p className="has-slot">Value Slot: {data.slot}</p>
            </div>
        </div>
    )
}

export default Ability;