import React, { useState } from 'react';
import { motion } from 'framer-motion';


const DiceRollingGame = () => {
  const [currentRoll, setCurrentRoll] = useState(null);
  const [highestRoll, setHighestRoll] = useState(0);
  const [rollCount, setRollCount] = useState(0);

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1;
    setCurrentRoll(roll);
    setRollCount((prevCount) => prevCount + 1);
    setHighestRoll((prevHighest) => (roll > prevHighest ? roll : prevHighest));
  };

  const renderDice = (roll) => {
    const diceFaces = {
      1: [4],
      2: [0, 8],
      3: [0, 4, 8],
      4: [0, 2, 6, 8],
      5: [0, 2, 4, 6, 8],
      6: [0, 2, 3, 5, 6, 8],
    };

    return (
      <div className="dice">
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i} className={diceFaces[roll]?.includes(i) ? 'dice-dot' : ''}></div>
        ))}
      </div>
    );
  };

  return (
    <div className="main-container">
      <div className="car-container">
        <div className="card">
          <h1 className="heading">Dice Rolling Game</h1>
        </div>
        <div className='dice-box'>
        <div className="motion-container">
          <motion.div
            key={currentRoll}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6 }}
          >
            {currentRoll !== null ? renderDice(currentRoll) : <span style={{ color: '#bbb' }}>Roll to start!</span>}
          </motion.div>
        </div>
        </div>
        <div className="button-class">
          <button onClick={rollDice} className="button">
            Roll Dice
          </button>
          <div className="count">
            <p>Roll Count: {rollCount}</p>
            <p>Highest Roll: {highestRoll}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiceRollingGame;
