import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.nome = props.nome;
    this.qtd = props.qtd;
    this.state = {
        clicks: parseInt(props.qtd),
    }
};

  click = event => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  };

  render() {
    return (
      <div>
        <span> Id: {this.id} </span>
        <br></br>
        <span> Nome: {this.nome} </span>
        <br></br>
        <button onClick={this.click}>
          {this.state.clicks} Likes
        </button>
      </div>
    );
  }
}

export default Post;
