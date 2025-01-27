import React from 'react';
import ReactDOM from 'react-dom/client';
import DiceRollingGame from './App';
import './styles.css';

function Main(){
    return (
        <div>
            <DiceRollingGame />
        </div>
    )

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />)