import Slider from "react-slick";
import { data } from "../../data/worksData";
import './slider.scss'


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  adaptiveHeight: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: false
};

export const SliderComponent = () => {
  return (
    <Slider {...settings}>
      {data.map((d) => {
          return (
            <div className="show-container" key={d.id}>
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt={d.title} />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <a href="/"><span>view on Github</span></a>
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
    </Slider>
  );
};

