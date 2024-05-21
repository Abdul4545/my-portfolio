import React from "react";
import "./Skills.css"

import skills from "../../skills.json";

function Skills() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row mt-5">
        {skills.map((skill) => (
          <div key={skill.id} className="col-md-3 col-sm-6 mb-4">
            <div className="card Card">
              <div className="image-cotainer"><img src={skill.image} className="card-img-top image" alt={skill.title} /></div>
              <div className="card-body">
                <h5 className="card-title">{skill.name}</h5>  
                <h5 className="card-title">{skill.level}</h5>  
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
