import "./intro.scss";
import { init } from "ityped";
import { useRef, useEffect } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1800,
      backSpeed: 70,
      strings: ["Developer", "Engineer", "Enthusiast"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/portrait.png" alt="xavier" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>hi there, I'm</h2>
          <h1>Xavier Ricardo</h1>
          <h3>
            Software <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
}
