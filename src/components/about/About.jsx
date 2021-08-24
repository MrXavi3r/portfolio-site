import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <h1>A LITTLE ABOUT ME...</h1>
      <div className="container">
        <div className="page left">
          <div className="left-top">
            <section className="lta">
              <p>
                I've always had a passion for tech, but I have truly grown to
                love software development. I'm just getting started.
              </p>
            </section>
            <section className="ltb">
              <img src="assets/programmer.svg" alt="xavier" className="xavier" />
            </section>
          </div>
          <div className="left-center">
            <section className="lca">
              <img src="assets/computer.svg" alt="forex" />
              <img src="assets/bitcoin.svg" alt="forex" />
              <img src="assets/rising.svg" alt="forex" />
              <img src="assets/exchange-rate.svg" alt="forex" />
            </section>
            <section className="lcb">
              <p>
                I've been involved in financial markets as a trader for just
                over a decade now... when im not coding, I spend much of my time
                online analyzing charts, managing trades, and reading financial
                news articles
              </p>
            </section>
          </div>
          <div className="left-bottom">
            <section className="lba">
              <p>
                Despite how much time I spend in front of the computer, I'm a
                big outdoors guy. I love watching and playing sports, running at
                the track and pickup basketball games. I'd like to explore
                outside even more. Skydiving is on my bucket list, and I love to
                go scuba diving whenever I can.
              </p>
            </section>
            <section className="lbb">
              <img src="assets/scuba.svg" alt="scuba" />
            </section>
          </div>
        </div>
        <div className="page right">
          <div className="right-top"></div>
          <div className="right-center"></div>
          <div className="right-bottom"></div>
        </div>
      </div>
    </div>
  );
}
