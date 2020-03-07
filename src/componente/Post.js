import React from 'react';
import './post.css';
class Post extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.text = props.text;
    }
    render() { 

        return ( 
            <div className="post">
                <span>Nome: {this.name}</span><br></br>
                <span>Texto: {this.text}</span>
            </div>
            
        );
    }
}
 
export default Post;