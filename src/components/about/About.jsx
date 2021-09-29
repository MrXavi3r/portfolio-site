import "./about.scss";
import diver from "../../diver.svg";
// import ocean from "../../ocean.svg";

export default function About() {
  return (
    <div className="about" id="about">
      <h1>A BIT ABOUT ME...</h1>
      <div className="top">
        <div
          className="top-left"
          style={{
            backgroundImage: `url(${diver})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <img src="assets/bitcoin.svg" alt="bitcoin" />
        </div>
        <div className="top-right">
          <p className="forex">
            I've been involved in the financial markets as a trader for just
            over a decade now. When i'm not coding, I spend much of my time
            online analyzing charts, managing trades, and reading financial news
            articles. <mark>PRO TIP:</mark> buy and hold onto some bitcoin!
          </p>
          <p>
            Despite the time I spend online, I'm a big outdoors guy. I love
            playing sports, running at the track and pickup basketball. I love
            to explore. Skydiving is on my bucket list, and scuba diving is my
            favorite hobby. I go whenever possible.
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <p className="growth">
            Growth and impact are what I personally strive for on a daily basis.
            My goals are to continue to improve myself personally and level up
            my skills, while positively impacting those who I come in touch
            with.
          </p>
          <p>
            I'm eager to work on challenging projects alongside other talented
            developers and i'm curious about the Dev Ops end of things, from
            taking an app from the inception of the idea, through development,
            to deployment and continuous integration.
          </p>
        </div>
        <div className="bottom-right">
          <div>JAVASCRIPT</div>
          <div>REACT</div>
          <div>CSS/SASS</div>
          <div>MONGODB</div>
          <div>NODE/EXPRESS</div>
          <div>GIT/GITHUB</div>
        </div>
      </div>
    </div>
  );
}
