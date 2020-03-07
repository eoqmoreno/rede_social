import React from 'react';
import Post from './Post';
import './galeria.css';

function  Galeria() {
    return (
        <div className="galeria">
            <h5>Linha do tempo</h5>
            <Post id="1" nome="DjHenriqueDeFerraz" qtd="1000"></Post>

        </div>

    );
}

export default Galeria;