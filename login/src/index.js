import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./login";

function App(){
    return(
        <Login />

    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)