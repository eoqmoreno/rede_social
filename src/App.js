import React from 'react';
import Navbar from './componentes/navbar';
import Galeria from './componentes/Galeria';

function App() {
  return (
    <div>
      <Navbar name="Victor"></Navbar>
      {
      // Passando por PROPS as informações pro navbar
      }
      <Galeria></Galeria>
      {
      // Usando o componente Galeria
      }
    </div>
  );
}

export default App;
