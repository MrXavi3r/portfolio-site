import "./about.scss";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="left">
        <h2>A BIT ABOUT ME...</h2>
        <img
          src="assets/about_img.svg"
          alt="about"
          width="600"
          className="about-img"
        />
      </div>
      <div className="right">
        <div className="about-item grid-item-1">
          <span>
            <div className="abt-icon-container">
              <img src="assets/cogwheels.svg" alt="gear-wheel" />
            </div>
          </span>
          <div className="p-container">
            <p>
              Self improvement is a value I hold close. Each day I strive to not
              only level up my skills, but to also positively impact anyone whom
              I come in touch with during that process.
            </p>
          </div>
        </div>
        <div className="about-item grid-item-2">
          <span>
            <div className="abt-icon-container">
              <img src="assets/blockchain.svg" alt="blockchain development" />
            </div>
          </span>
          <div className="p-container">
            <p>
              I'm eager to work on challenging projects alongside other talented
              developers and eventually i'd like to explore emerging
              technologies such as blockchain.
            </p>
          </div>
        </div>
        <div className="about-item grid-item-3">
          <span>
            <div className="abt-icon-container">
              <img src="assets/exchange-rate.svg" alt="chart" />
            </div>
          </span>
          <div className="p-container">
            <p>
              Aside from coding, I've been involved in the financial markets as
              a trader for just over a decade. I spend much of my time online
              analyzing charts, managing trades, and reading financial news
              articles. <mark>PRO TIP:</mark> buy and hold some bitcoin!
            </p>
          </div>
        </div>
        <div className="about-item grid-item-4">
          <span>
            <div className="abt-icon-container">
              <img src="assets/scuba.svg" alt="diver" />
            </div>
          </span>
          <div className="p-container">
            <p>
              Despite the time I spend online, I'm a big outdoors guy. I love
              playing sports, running at the track and playing pickup
              basketball. I love to explore. Skydiving is on my bucket list, and
              scuba diving is my favorite hobby. I go whenever possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
