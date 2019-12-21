import React, { Component } from 'react';
import './PostList.css';

import Post from './Post';

class PostList extends Component {
    
    render() {
        const posts = this.props.posts
        return (
            posts.map((title, i) => 
                <Post
                    key={i}
                    title={posts[i].title}
                    content={posts[i].content}
                    img_url={posts[i].img_url}
                    publish_date={posts[i].publish_date}
                >
                </Post>
            )
        )               
    }
}



export default PostList;