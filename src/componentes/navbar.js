import React from "react";
import "./navbar.css";
import Logo from "../imgs/logo.png";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
    // Recebendo por PROPS o nome que vem do App;
  }
  render() {
    return (
      <div className="navbar">
        <img src={Logo} alt="logo" className="logo left" />
        <button className="btn">Linha do Tempo</button>
        <button className="btn">Perfil</button>
        <span className="right">{this.name}</span>
        {
          //Rederizando o nome que chega por PROPS
        }
      </div>
    );
  }
}

export default Navbar;