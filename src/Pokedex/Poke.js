import React, { useState, useEffect }from 'react';
import './Poke.scss';

const Poke = (props) => {

    const initialPokeState = {
        pokeId: props.id,
        pokeName: '',
        pokeHeight: '',
        pokeWeight: '',
        pokeImg: '',
        pokeType: '',
    }

    const [poke, setPoke] = useState(initialPokeState);

    return (
        <div className="main">
            <img className="title" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="poke-logo" />
            <div className="poke-dex">
                <img className="img" alt="" />
                <div className="reset"></div>
                <input type="text" className="id" />
                <div className="info">
                    <h1 className="name"></h1>
                    <h3 className="text">Peso:  Kg </h3>
                    <h3 className="text">Altura:  m</h3>
                    <h3 className="text">Tipo: </h3>
                </div>
                <div className="buttons">
                    <div className="button"></div>
                    <div className="button"></div>
                </div>
            </div>
        </div>
    )
}

export default Poke;