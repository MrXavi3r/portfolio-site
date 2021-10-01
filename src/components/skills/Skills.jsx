import "./skills.scss";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="heading-block">
        <h2>Software Development With Purpose</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          assumenda, aliquam quidem voluptatibus ea unde aspernatur nulla
          corporis eum exercitationem.
        </p>
      </div>
      <div className="skill-container">
        <div className="skill-item item-1">
          <img src="assets/react-2.svg" alt="react-logo" />
          <h4>Powerful Frontend Technologies</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            unde reiciendis impedit dignissimos fugit qui cumque molestiae
            consectetur ratione quas, repudiandae ea exercitationem autem
            minima!
          </p>
        </div>
        <div className="skill-item item-2">
          <img src="assets/nodejs.svg" alt="node.js logo" />
          <h4>Seamless Backend Integration</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            officia tenetur et doloremque ipsam expedita quam nemo asperiores.
            Quia vel saepe placeat, suscipit dolorum labore!
          </p>
        </div>
        <div className="skill-item item-3">
          <img src="assets/sass.svg" alt="sass logo" />
          <h4>Attractive Design</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            officia tenetur et doloremque ipsam expedita quam nemo asperiores.
            Quia vel saepe placeat, suscipit dolorum labore!
          </p>
        </div>
        <div className="skill-item item-4">
          <img src="assets/mongodb.svg" alt="mongoDB logo" />
          <h4>Convenient Database Solutions</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            officia tenetur et doloremque ipsam expedita quam nemo asperiores.
            Quia vel saepe placeat, suscipit dolorum labore!
          </p>
        </div>
      </div>
    </div>
  );
}
