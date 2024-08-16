import React from 'react';
import './index.css';
import './App.css'
import Button from './components/Button';
import Counter from './components/Counter';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const driveClic = () => {
    setNumClics(numClics + 1);
  };

  const restartCounter = () => {
    setNumClics(0)
  };

  return (
    <div className="App">
      <div className="freecodecamp-container-logo">
        <img src={freeCodeCampLogo} alt="" className="freecodecamp-logo" />
      </div>
      <div className="principal-container">
        <Counter numClics={numClics}/>
        <Button
          text='Click'
          isClickButton={true}
          clickDrive={driveClic} />
        <Button
          text='Restart'
          isClickButton={false}
          clickDrive={restartCounter} />
      </div>
    </div>
  );
}

export default App;
