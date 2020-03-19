import React from "react";
import "./navbar.css";
import Logo from "../imgs/logo.png";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
<<<<<<< HEAD
=======
    // Recebendo por PROPS o nome que vem do App;
>>>>>>> 441de3051fb6506a0e46307c15899142a72c3cef
  }
  render() {
    return (
      <div className="navbar">
        <img src={Logo} alt="logo" className="logo left" />
        <button className="btn">Linha do Tempo</button>
        <button className="btn">Perfil</button>
        <span className="right">{this.name}</span>
<<<<<<< HEAD
=======
        {
          //Rederizando o nome que chega por PROPS
        }
>>>>>>> 441de3051fb6506a0e46307c15899142a72c3cef
      </div>
    );
  }
}

export default Navbar;