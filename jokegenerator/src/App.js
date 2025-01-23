import React,{useState} from "react";

import jokesData from "./jokes";


function App(){
    const [currentJoke , setCurrentJoke] = useState(null);
    function randomjokes(){
        const randomIndex = Math.floor(Math.random() * jokesData.jokes.length)
        setCurrentJoke(jokesData.jokes[randomIndex]);
        
    } 
    return(
        <div className="mainContainer">
            <h1 className="title
            ">Generate Random Jokes</h1>
            <button className="jokeButton" onClick={randomjokes}>Get Joke</button>
            {currentJoke && (<div className="jokeContainer">
                <h2 className="jokeSetup">{currentJoke.setup}</h2>
                <p className="jokeDelivery">{currentJoke.delivery}</p>
                </div>)}
        </div>

    );
}
export default App;