import React, { useState } from "react";
import Main from "../main/Main";
import "./Front.css";

function Front() {
  let [entered, setEntered] = useState(true);

  if (entered) return <Main />;

  return (
    <div className="Front">
      <button onClick={() => setEntered(true)}>enter</button>
    </div>
  );
}

export default Front;
