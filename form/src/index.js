import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./form";

function App(){
    return(
        <Form />
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)