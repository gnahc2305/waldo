import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Info from './components/Info';

function App() {
  const [score, setScore] = useState(0);

  function addScore() {
    setScore(score + 1);
  }

  function winGame() {
    if (score === 3) {
      console.log('You Win!');
    }
  }

  winGame();

  return (
    <div className="app">
      <Header score={score} />
      <Info />

      <div className="dog"></div>
      <div className="boots"></div>
      <div className="cookie"></div>

    </div>
  );
}

export default App;
