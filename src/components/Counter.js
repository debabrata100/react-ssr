import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isRedirect, setRedirect] = useState(false);
    useEffect(()=>{
        if(count > 5){
            window.location.href="/"
        }
    },[count])
    return (<div className="counter">
            <p>When count becomes more than 5, it ll redirect to home</p>
            <h1>Counts: {count}</h1>
            <button onClick={() => setCount(count+1)}>increase</button>
            <button onClick={() => setCount(count-1)}>decrease</button>
            <br/>
            <a href="/">to Home</a>
        </div>);
}

export {Counter};