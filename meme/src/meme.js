import React, { useState } from "react";



export default function Meme() {
    // State to store the selected meme image URL
    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"

    });

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))

    },[])
    

    function getMemeImage() {
        
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url

        }));
    }

    function handleChange(event){
        const {name,value} = event.target
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]:value

        }));

    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    className="form-input"
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    className="form-input"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getMemeImage} className="form-button">
                    Get a new meme image
                </button>
            </div>
           <div className="meme">
            <div className="meme-container">
            <img src={meme.randomImage} className="meme-image" alt="Random Meme"/>
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            </div>
        </main>
    );
}
