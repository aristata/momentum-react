import React from "react";
import getBackground from "./ts/background";

function App() {
  const backgroundImageFileName = getBackground();
  return (
    <div className="container mx-auto">
      <img
        src={`/images/${backgroundImageFileName}`}
        alt="backgroundImage"
        className="bg-scroll bg-cover"
      ></img>
    </div>
  );
}

export default App;
