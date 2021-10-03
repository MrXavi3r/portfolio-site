import "./skills.scss";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="heading-block">
        <h2>Software Development With Purpose</h2>
        <p>
          Javascript is the core of my engineering skill-set. Each branch below serves complimentary to that.
        </p>
      </div>
      <div className="skill-container">
        <div className="skill-item item-1">
          <img src="assets/react-2.svg" alt="react-logo" />
          <h4>Powerful Frontend Technology</h4>
          <p>
            ReactJs is my strongest Javascript library. Modular,
            easily-reuseable component architecture and virtual DOM are what
            truly set React apart. I'm familiar with class and function
            components, hooks, context, & router.
          </p>
        </div>
        <div className="skill-item item-2">
          <img src="assets/nodejs.svg" alt="node.js logo" />
          <h4>Seamless Backend Integration</h4>
          <p>
            Node/ExpressJs is the perfect server side solution for Javascript
            front-ends. I'm familiar with creating API's and local servers from
            scratch and interfacing with 3rd party API's.
          </p>
        </div>
        <div className="skill-item item-3">
          <img src="assets/sass.svg" alt="sass logo" />
          <h4>Attractive Design</h4>
          <p>
            Creating friendly and attractive user interfaces and experiences is
            a cornerstone of web development. For styling, i'm competent in CSS,
            SCSS and the Bootstrap framework.
          </p>
        </div>
        <div className="skill-item item-4">
          <img src="assets/mongodb.svg" alt="mongoDB logo" />
          <h4>Convenient Database Solutions</h4>
          <p>
            MongoDB is my database of choice for its schema flexibility, cloud
            accessibility, and JSON-like document structure.
          </p>
        </div>
      </div>
    </div>
  );
}
