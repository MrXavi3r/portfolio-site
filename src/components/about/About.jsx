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
              <img
                src="assets/programmer.svg"
                alt="xavier"
                className="xavier"
              />
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
                over a decade now. When im not coding, I spend much of my time
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
          <div className="right-top">
            <h2>TECH STACKS I'M FAMILIAR WITH...</h2>
            <p>
              I keep an open mind to any language, library, or framework, as I
              recognize that each is simply a tool for which to achieve an end.
              Its always best to choose the best tools for the job. Though with
              that being said, focus is important, and for that reason I work
              primarily in Javascript and with the React library. On the back
              end, I'm also familiar with Node.js and the Express framework.
              CSS, Sass, and Bootstrap for styling, and have some limited
              experience with MongoDB as well as PostgreSQL.
            </p>
          </div>
          <div className="right-bottom">
            <section className="icons-container">
              <img src="assets/javascript.svg" alt="javascript" />
              <img src="assets/react.svg" alt="javascript" />
              <img src="assets/mongodb.svg" alt="javascript" />
              <img src="assets/sass.svg" alt="javascript" />
              <img src="assets/bootstrap.svg" alt="javascript" />
              <img src="assets/css.svg" alt="javascript" />
              <img src="assets/nodejs.svg" alt="javascript" />
              <img src="assets/express-js.svg" alt="javascript" />
              <img src="assets/postgresql.svg" alt="javascript" />
            </section>
            <section className="connect-container">
              <a
                href="https://www.linkedin.com/in/xavier-ritch-254238145/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="linkedin card">
                  <img src="assets/linkedin.svg" alt="linkedin" />
                  <span>my LinkedIn</span>
                </div>
              </a>
              <a
                href="https://github.com/MrXavi3r"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="github card">
                  <img src="assets/github.svg" alt="github" />
                  <span>my Github</span>
                </div>
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
