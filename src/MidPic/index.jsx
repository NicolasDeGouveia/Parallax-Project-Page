import "./Style.scss";
import wild from "../assets/wild.jpg";
import { useState } from "react";

export default function MidPic() {
  const [offSet, setOffSet] = useState();
  const handleScroll = () => setOffSet(window.pageYOffset);
  const value = window.screenY;
  window.addEventListener("scroll", handleScroll);

  return (
    <div className="midpic">
      <div className="midpic__container">
        <img src={wild} alt="" />
        <h2 style={{ top: `${value + offSet * 0.15 + "px"}` }}>Nature</h2>
      </div>
    </div>
  );
}
