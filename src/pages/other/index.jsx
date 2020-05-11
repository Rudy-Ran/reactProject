import React from "react";

import ShowArea from "./ShowArea.jsx";
import Buttons from "./Buttons.jsx";
import { Color } from "./color.jsx";

function App() {
  return (
    <div className="App">
      <Color>
        <Buttons />
        <ShowArea />
      </Color>
    </div>
  );
}

export default App
