import "./Style.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__title">
          <h1>Logo</h1>
        </div>
        <div className="navbar__container__menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
