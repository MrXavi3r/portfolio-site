import "./about.scss";
import diver from '../../diver.svg'

export default function About() {
  return (
    <div className="about" id="about">
      <h1>A BIT ABOUT ME...</h1>
      <div className="container">
        <div
          className="page left"
          style={{ backgroundImage: `url(${diver})`, backgroundRepeat: "no-repeat" }}
        >
          <div className="left-top">
            <section className="lta">
              <p>
                My passion for tech has always been a driver, but I have truly
                grown to love software development. I'm most familiar with
                Javascript/React on the front end and Node/Express, MongoDb on
                the backend, but open to virtually all stacks
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
              {/* <img src="assets/computer.svg" alt="forex" />
              <img src="assets/bitcoin.svg" alt="forex" />
              <img src="assets/rising.svg" alt="forex" /> */}
              <img
                src="assets/exchange-rate.svg"
                alt="forex"
                className="exchange"
              />
            </section>
            <section className="lcb">
              <p>
                I've been involved in the financial markets as a trader for just
                over a decade now. When i'm not coding, I spend much of my time
                online analyzing charts, managing trades, and reading financial
                news articles. <mark>PRO TIP:</mark> buy and hold onto some
                bitcoin
              </p>
            </section>
          </div>
          <div className="left-bottom">
            <section className="lba">
              <p>
                Despite the time I spend online, I'm a big outdoors guy. I love
                playing sports, running at the track and pickup basketball. I
                love to explore. Skydiving is on my bucket list, and I love to
                go scuba diving whenever possible
              </p>
            </section>
            <section className="lbb">
              <img src="assets/scuba.svg" alt="scuba" />
            </section>
          </div>
        </div>
        {/* <div className="page right">
          <div className="right-top">
            <h2>TECH I USE...</h2>
            
          </div>
          <div className="right-bottom">
            
          </div>
        </div> */}
      </div>
    </div>
  );
}
