import React from 'react';
import './navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props); 
        this.name = this.props.name;
    }
    render() { 
        return (
        <nav>
            <span>logo</span>
            <button>Linha do Tempo</button>
            <button>Perfil</button>
            <span className="righ">{this.name}</span>
        </nav>
        );
    }
}

export default Navbar;