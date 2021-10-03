import "./testimonials.scss";
import { data } from "../../data/testimonialData";

export default function Testimonials() {

  return (
    <section className="testimonials" id="testimonials">
      <h1>People who've said nice things...</h1>
      <div className="container">
      {data.map((d)=> {
          return (
            <div className={d.featured ? "card featured" : "card"} key={d.id}>
          <div className="top">
            <img
              src="assets/right-arrow.png"
              className="left"
              alt="right-arrow"
            />
            <img
              src={d.img}
              alt="person"
              className="user"
            />
            <img src={d.icon} alt="icon" className="right" />
          </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
          )
      })}
      </div>
    </section>
  );
}
