import "./works.scss";
import { SliderComponent } from "./SliderComponent";

export default function Works() {
  return (
    <div className="works" id="works">
      <h2 className="works-heading">Showcase</h2>
      <div className="slider-container">
        <SliderComponent />
      </div>
    </div>
  );
}
