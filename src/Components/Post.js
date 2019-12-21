import React, { Component } from 'react';
import './Post.css'

class Post extends Component {

    constructor() {
        super()
        this.state = {
            expanded: false
        }
    }

    render() {

        if (this.state.expanded) {
            return (
                <div className="expandedPost">
                <h2>{this.props.title}</h2>
                <hr/>
                <img className="postImg" alt='basketball player' width="240px" src={this.props.img_url} /> 
                <div className="postContent">{this.props.content}</div>
                <button onClick={this.expandedText} className="blueButton">Read less</button>
                <hr/>
                <div className="date">{this.props.publish_date}</div>
                </div>  
            )
        } else {
            return (
                <div className="post">
                <h2>{this.props.title}</h2>
                <hr/>
                <img className="postImg" alt='basketball player' width="240px" src={this.props.img_url} /> 
                <div className="postContent"></div>
                <button onClick={this.expandedText} className="blackButton">Read more</button>
                <hr/>
                <div className="date">{this.props.publish_date}</div>
                </div>  
            )
        }
    }

    expandedText = () => {
        let currentState = this.state.expanded
        this.setState({
            expanded: !currentState
        })
    }
}



export default Post;