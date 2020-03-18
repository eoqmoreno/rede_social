import React from "react";
import './post.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    //recebendo o ID pro PROPS
    this.nome = props.nome;
    //recebendo o nome
    this.qtd = props.qtd;
    //recebendo a quantidade de likes
    this.state = {
        clicks: parseInt(props.qtd),
        //injetando a quantidade no state pra modificar quando clicar
    }

};

  click = event => {
    this.setState({
      clicks: this.state.clicks + 1
      //quandor clicar adiciona 1 ao número de likes que já tá no state
    });
  };

  render() {
    return (
      <div className="post">
        <span> Id: {this.id} </span>
        {
        //mostrando o id
        }
        <br></br>
        <span> Nome: <br></br>{this.nome} </span>
        {
        //mostrando o nome
        }
        <br></br>
        <button onClick={this.click}>
        {
        //quando clica ele chama o metodo click que adiciona mais um ao contador
        }
          {this.state.clicks} Likes
          {
            //mostrando os likes
          }
        </button>
      </div>
    );
  }
}

export default Post;
