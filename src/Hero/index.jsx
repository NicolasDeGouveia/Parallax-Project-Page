import { useState } from "react";
import bg from "../assets/bg.jpg";
import moon from "../assets/moon.png";
import mountain from "../assets/mountain.png";
import road from "../assets/road.png";

import "./Style.scss";

export default function Hero() {
  const [offSet, SetOffSet] = useState();
  const value = window.screenY;

  const handleScroll = () => SetOffSet(window.pageYOffset);

  window.addEventListener("scroll", handleScroll);

  return (
    <section className="hero">
      <img
        src={bg}
        alt="/"
        style={{ top: `-${value + offSet * 0.38 + "px"}` }}
      />
      <img
        src={moon}
        alt=""
        style={{ left: `-${value + offSet * 0.38 + "px"}` }}
      />
      <img
        src={mountain}
        alt=""
        style={{ top: `-${value + offSet * 0.15 + "px"}` }}
      />
      <img
        id="road"
        src={road}
        alt=""
        style={{ top: `${value + offSet * 0.15 + "px"}` }}
      />
      <h2 style={{ top: `${value + offSet * 0.8 + "px"}` }}>Into the wild</h2>
    </section>
  );
}
