import sauvage from "../assets/sauvage.jpg";
import "./Style.scss";
import { useState } from "react";

export default function Sauvage() {
  const [offSet, SetOffSet] = useState();
  const value = window.screenY;

  const handleScroll = () => SetOffSet(window.pageYOffset);

  window.addEventListener("scroll", handleScroll);
  return (
    <div className="sauvage">
      <div className="sauvage__container">
        <img src={sauvage} alt="" />
        <h2 style={{ right: `${value + offSet * 0.28 + "px"}` }}>Wild</h2>
      </div>
    </div>
  );
}
