import "./about.scss";
import diver from "../../diver.svg";
// import ocean from "../../ocean.svg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="left">
        <img
          src="assets/about_img.svg"
          alt="about"
          width="600"
          className="about-img"
        />
      </div>
      <div className="right">
        <p>
          Growth and impact are what I personally strive for on a daily basis.
          My goals are to continue to improve myself personally and level up my
          skills, while positively impacting those who I come in touch with.
          I'm eager to work on challenging projects alongside other talented
          developers and i'm curious about the Dev Ops end of things, from
          taking an app from the inception of the idea, through development, to
          deployment and continuous integration.
          I've been involved in the financial markets as a trader for just over
          a decade now. When i'm not coding, I spend much of my time online
          analyzing charts, managing trades, and reading financial news
          articles. <mark>PRO TIP:</mark> buy and hold onto some bitcoin!
          Despite the time I spend online, I'm a big outdoors guy. I love
          playing sports, running at the track and pickup basketball. I love to
          explore. Skydiving is on my bucket list, and scuba diving is my
          favorite hobby. I go whenever possible.
        </p>
      </div>
    </section>
  );
}
