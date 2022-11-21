import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Info from "./components/Info";

function App() {
  const [score, setScore] = useState(0);
  const [c1, setC1] = useState("white");
  const [c2, setC2] = useState("white");
  const [c3, setC3] = useState("white");

  function addScore(e) {
    setScore(score + 1);

    if (e.target.className === "dog") {
      setC1("red");
    } else if (e.target.className === "boots") {
      setC2("red");
    } else if (e.target.className === "cookie") {
      setC3("red");
    }
  }

  function winGame() {
    if (score === 3) {
      alert("You Win!");
    }
  }

  winGame();

  return (
    <div className="app">
      <Header score={score} />
      <Info color1={c1} color2={c2} color3={c3} />

      <div className="dog" onClick={addScore}></div>
      <div className="boots" onClick={addScore}></div>
      <div className="cookie" onClick={addScore}></div>
    </div>
  );
}

export default App;
