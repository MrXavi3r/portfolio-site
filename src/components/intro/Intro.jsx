import "./intro.scss";
import { init } from "ityped";
import { useRef, useEffect } from "react";
// import clouds from '../../cloud.svg'


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1800,
      backSpeed: 70,
      strings: ["Software Developer", "Tech Enthusiast", "Superhero"],
    });
  }, []);

  return (
    // style={{ backgroundImage: `url(${clouds})`, backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/xavier.svg" alt="xavier" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>welcome, I'm</h2>
          <h1>Xavier Ricardo</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
}
