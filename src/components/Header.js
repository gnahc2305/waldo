import React from "react";

function Header({ score }) {
  return (
    <div className="header">
      <h1>Photo Tagging App</h1>
      <h2>Score: {score}</h2>
    </div>
  );
}

export default Header;
