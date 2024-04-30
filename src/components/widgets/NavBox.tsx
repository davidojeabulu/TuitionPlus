import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MenuOptions, get_url } from "./Services";
import elevenPlus from "../../../public/elevenPlus.png";
import exam from "../../../public/exam.png";
import school from "../../../public/school.png";

interface NavBoxProps {
  option: MenuOptions;
}

export const NavBox: React.FC<NavBoxProps> = ({ option }) => {
  const getImage = () => {
    switch (option) {
      case MenuOptions.elevenPlus:
        return (
          <div>
            <Image src={elevenPlus} alt="11+ image" />
          </div>
        );
      case MenuOptions.tests:
        return (
          <div>
            <Image src={exam} alt="Exam image" />
          </div>
        );
    }
  };

  return (
    <Link href={get_url(option)}>
      <button className="no-border">
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
    </Link>
  );
};
