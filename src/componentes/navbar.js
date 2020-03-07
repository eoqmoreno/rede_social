import React from "react";
import "./navbar.css";
import Logo from "../imgs/logo.png";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
  }
  render() {
    return (
      <div className="navbar">
        <img src={Logo} alt="logo" className="logo left" />
        <button>Linha do Tempo</button>
        <button>Perfil</button>
        <span className="right">{this.name}</span>
      </div>
    );
  }
}

export default Navbar;
