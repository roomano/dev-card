import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML & CSS",
    level: "advanced",
    color: "#ff7eeb",
  },
  {
    skill: "JS",
    level: "intermediate",
    color: "#e4e50e",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#53badf",
  },
  {
    skill: "PHP",
    level: "intermediate",
    color: "#28f1a5",
  },
  {
    skill: "Ci4",
    level: "intermediate",
    color: "#e9980b",
  },
  {
    skill: "C#",
    level: "intermediate",
    color: "rgb(116 36 249)",
  },
  {
    skill: ".Net Core",
    level: "intermediate",
    color: "#53badf",
  },

  {
    skill: "BOOTSTRAP",
    level: "intermediate",
    color: "#b28ff5",
  },
  {
    skill: "JAVA",
    level: "beginner",
    color: "#fb6a29",
  },
  {
    skill: "PYTHON",
    level: "beginner",
    color: "#fb6a29",
  },
];

function App() {
  return (
    <>
      <Card />
    </>
  );
}

function Card() {
  return (
    <div className="card">
      <div className="card_image">
        <img className="image_s" src="images/romano.png" alt="dev_pic"></img>
      </div>
      <h2 className="namee">romano ivan pedro</h2>
      <p className="innerText">
        I'm a FullStack Web Developer, based in Mozambique, i love to learn
        modern web developmente with cute edge tecnologies. Currently employed,
        and on my free time, I like to explore the other technologies! 😘
      </p>
      <ul className="skillrow">
        {skills.map((skll) => (
          <SkillSet
            skill={skll.skill}
            level={skll.level}
            color={skll.color}
            key={skll.skill}
          />
        ))}
      </ul>
    </div>
  );
}

function SkillSet({ skill, level, color }) {
  //   let emogi = "";
  //   if (level === "beginner") emogi = "👶🏽";
  //   if (level === "intermediate") emogi = "💪🏽";
  //   if (level === "advanced") emogi = "🔥";
  return (
    <li className="skillSet" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      {/* <span>{emogi}</span> */}
      <span>
        {level === "beginner" && "👶🏽"}
        {level === "intermediate" && "💪🏽"}
        {level === "advanced" && "🔥"}
      </span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
