import "./works.scss";
import { useState } from "react";
import { data } from "../../data/worksData";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
    <h2>Showcase</h2>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => {
          return (
            <div className="container" key={d.id}>
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt={d.title} />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <span>view on Github</span>
                  </div>
                </div>
                <div className="right">
                  <img
                    src={d.img}
                    alt={d.title}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img
        src="assets/arrow.png"
        alt="arrow"
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        alt="arrow"
        className="arrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
