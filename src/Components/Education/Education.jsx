import React from "react";
import sps from "../Assets/SPS.jpg";
import lpu from "../Assets/LPU.jpg";
import "./Education.css";

const Education = () => {
  return (
    <>
      <h1 className="education">Education</h1>

      <hr />

      <div className="container d-flex justify-content-center">
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className="card" style={{ height: "465px" }}>
              <img
                src={sps}
                className="card-img-top ed-card-img"
                alt="SPS"
                style={{
                  height: "250px",
                  width: "90%",
                  margin: "auto",
                  marginTop: "10px",
                  marginBottom: "10px",
                  justifyContent: "center",
                }}
              />
              <div className="card-body ed-body">
                <h5 className="card-title">Matriculation</h5>
                <h5 className="card-text">Siddharth Public School</h5>
                <h5>Board : CBSE</h5>
                <h5>Percentage : 82</h5>
                <h5>Year : 2016-18</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card" style={{ height: "465px" }}>
              <img
                src={sps}
                className="card-img-top ed-card-img"
                alt="SPS"
                style={{
                  height: "250px",
                  width: "90%",
                  margin: "auto",
                  marginTop: "10px",
                  marginBottom: "10px",
                  justifyContent: "center",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Intermediate</h5>
                <h5 className="card-text">Siddharth Public School</h5>
                <h5>Board : CBSE</h5>
                <h5>Percentage : 85.8</h5>
                <h5>Year : 2018-20</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card" style={{ height: "465px" }}>
              <img
                src={lpu}
                className="card-img-top ed-card-img"
                alt="LPU"
                style={{
                  height: "200px",
                  width: "100%",
                  margin: "auto",
                  marginTop: "30px",
                  marginBottom: "40px",
                  justifyContent: "center",
                }}
              />
              <div className="card-body">
              <h5 className="card-title">B.tech (CSE)</h5>
                <h5 className="card-text">Lovely Professional University</h5>
                <h5>Private University</h5>
                <h5>CGPA : 7.85</h5>
                <h5>Year : 2021-2025</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
