import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (<div className="home">
            <h1>Home Page</h1>
            <div><a href="/counter">to Counter</a></div>
            <div><a href="/posts">to Posts</a></div>
            
        </div>);
}

export { Home };