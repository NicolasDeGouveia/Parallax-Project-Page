import "./Style.scss";
import cascade from "../assets/cascade.mp4";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <video src={cascade} autoPlay loop muted type="video/mp4" />
        <h2>This is our treasure</h2>
      </div>
    </div>
  );
}
