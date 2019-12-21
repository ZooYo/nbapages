import React, { Component } from 'react';

import PostList from './PostList'
import './MainPage.css'
import TitleBar from './TitleBar';



class MainPage extends Component {
    
    constructor() {
        super()
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        fetch('https://nba-drf.herokuapp.com/post/',{method: 'get'})
        .then(response => response.json())
        .then(jsonData => this.setState({ posts: jsonData}))
        .catch(err => {
            console.log('oooops')
        })
    }

    render() {
        if (this.state.posts.length === 0) {
            return <div className="mainpage">
                <h1>Oooops, It looks like there's no news</h1>
            </div> 
            
        }
        return (
            <div className="mainpage">
                <TitleBar></TitleBar>
                <PostList posts={this.state.posts}></PostList>
            </div>
        );
    }
}
  
  export default MainPage