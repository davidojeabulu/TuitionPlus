import React from "react";
import { useNavigate } from "react-router-dom";

import { MenuOptions } from "../../pages/Services/Services";
import elevenPlus from "../../assets/elevenPlus.png";
import exam from "../../assets/exam.png";
import school from "../../assets/school.png";

interface NavBoxProps {
  option: MenuOptions;
}

export const NavBox: React.FC<NavBoxProps> = ({ option }) => {
  const navigate = useNavigate();

  const getImage = () => {
    switch (option) {
      case MenuOptions.school:
        return (
          <div>
            <img src={school} alt="School image" />
          </div>
        );
      case MenuOptions.elevenPlus:
        return (
          <div>
            <img src={elevenPlus} alt="11+ image" />
          </div>
        );
      case MenuOptions.tests:
        return (
          <div>
            <img src={exam} alt="Exam image" />
          </div>
        );
    }
  };

  return (
    <button
      className="no-border"
      onClick={() => navigate("/Services", { state: { option: option } })}
    >
      <div className="card nav-box">
        <div className="card-image">
          <div className="nav-box-image">{getImage()}</div>
        </div>
        <div className="card-content">
          <div className="content">
            <p className="title is-5 is-center">{option}</p>
          </div>
        </div>
      </div>
    </button>
  );
};
