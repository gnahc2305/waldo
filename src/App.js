import { useState } from 'react';
import './App.css';
import Header from './components/Header';

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
      <Header />
      <div className="person1" onClick={addScore}>

      </div>
    </div>
  );
}

export default App;
