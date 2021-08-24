import "./topbar.scss";
import { Phone, Mail } from "@material-ui/icons";

export default function Topbar({ setMenuOpen, menuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Xavier
          </a>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>xritch89@hotmail.com</span>
          </div>
          <div className="itemContainer">
            <Phone className="icon phone" />
            <span className="phoneNum">954-296-6361</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
