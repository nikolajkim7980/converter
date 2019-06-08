import React, { useState } from "react";
import TopNav from "./TopNav";
import Conversion2 from "../conversions2/Conversion2";

function Main() {
  let [menu, setMenu] = useState("length");

  return (
    <div>
      <TopNav setMenu={setMenu} />
      <Conversion2 type={menu} />
    </div>
  );
}

export default Main;
