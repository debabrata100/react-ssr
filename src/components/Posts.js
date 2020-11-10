import React, { useEffect, useState } from 'react';

const Posts = (props) => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        if(window.__ROUTE_DATA__){
            setPosts(__ROUTE_DATA__);
        }
        
    });
    return (<div className="posts">
            <h1>Posts</h1>
            
            <ul>
                {
                    posts.map(p=>(<li key={p.id}>{p.title}</li>))
                }
            </ul>
            <a href="/">Back to Home</a>
            
        </div>);
}

export {Posts};