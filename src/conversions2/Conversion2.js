import React, { useState, useEffect } from "react";
import Conv from "convert-units";
import { Button } from "react-bootstrap";

import "./Conversion2.css";

function Conversion2({ type }) {
  let [value1, setValue1] = useState(1);
  let [value2, setValue2] = useState(1);
  let [unit1, setUnit1] = useState(undefined);
  let [unit2, setUnit2] = useState(undefined);

  console.log({ type });

  useEffect(() => {
    if (type === "length") {
      setUnit1("mi");
      setUnit2("ft");
    } else if (type === "mass") {
      setUnit1("kg");
      setUnit2("g");
    } else {
      setUnit1("l");
      setUnit2("ml");
    }
  }, [type]);

  return (
    <div className="Conversion2">
      Convert ({type})
      <div className="form1">
        <div className="side-by-side">
          <div className="row-by-row">
            <input
              type="number"
              value={value1}
              onChange={ev => setValue1(ev.target.value)}
            />
            <div className="units">
              {Conv()
                .possibilities(type)
                .map(t => (
                  <Button
                    variant={t === unit1 ? "secondary" : "primary"}
                    key={t}
                    onClick={() => setUnit1(t)}
                  >
                    {t}
                  </Button>
                ))}
            </div>
          </div>

          <div className="conversion-btns">
            <button
              onClick={() => {
                setValue1(
                  Conv(value2)
                    .from(unit2)
                    .to(unit1)
                );
              }}
            >
              &lt;-
            </button>
            <button
              onClick={() => {
                setValue2(
                  Conv(value1)
                    .from(unit1)
                    .to(unit2)
                );
              }}
            >
              -&gt;
            </button>
          </div>
          <div className="row-by-row">
            <input
              type="number"
              value={value2}
              onChange={ev => setValue2(ev.target.value)}
            />
            <div className="units">
              {Conv()
                .possibilities(type)
                .map(t => (
                  <Button
                    variant={t === unit2 ? "secondary" : "primary"}
                    key={t}
                    onClick={() => setUnit2(t)}
                  >
                    {t}
                  </Button>
                ))}
            </div>
          </div>
        </div>
        <div>
          value 1 ={value1} unit 1 = {unit1}
          value 2 = {value2} unit 2 = {unit2}
        </div>
      </div>
    </div>
  );
}

export default Conversion2;
