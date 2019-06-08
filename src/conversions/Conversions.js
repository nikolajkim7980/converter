import React, { useState } from "react";
import convert from "convert-units";
import "./Conversions.css";

const units1 = [
  "meters",
  "inches",
  "feet",
  "kilometers",
  "centimeters",
  "milimeters",
  "miles",
  "yards",
  "feet"
];
const units2 = [
  1,
  39.3701,
  3.280841666667,
  0.001,
  100,
  1000,
  0.000621371,
  1.09361,
  3.28084
];

function Convert(a, b, c) {
  return ((units2[b] / units2[a]) * c).toFixed(2);
}

function Conversions() {
  let [txt, setTxt] = useState(0);
  let [from, setFrom] = useState(0);
  let [to, setTo] = useState(0);
  let [final, setFinal] = useState(0);

  return (
    <div>
      <div>Convert From~</div>
      {units1.map((v, i) => (
        <button
          className="fromButton"
          onClick={() => {
            setFrom(i);
          }}
        >
          {v}
        </button>
      ))}
      <div>Convert To~</div>
      {units1.map((v, i) => (
        <button
          onClick={() => {
            setTo(i);
          }}
        >
          {v}
        </button>
      ))}
      <hr />
      <div>
        SELECTED: {units1[from]} to {units1[to]}
      </div>
      <input
        type="text"
        value={txt}
        onChange={ev => {
          setTxt(ev.target.value);
        }}
      />{" "}
      <button
        onClick={() => {
          setFinal(Convert(from, to, txt));
        }}
      >
        Convert
      </button>
      <hr />
      <div>
        {txt} {units1[from]} is about {final} {units1[to]}
      </div>
    </div>
  );
}

export default Conversions;
