import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import sideBanner2 from "../../assets/side-banner-2.png";
import sideBanner3 from "../../assets/side-banner-3.png";
import sideBanner4 from "../../assets/side-banner-4.png";
import { Page } from "../../components/Page/Page";
import { Tab } from "../../components/Tabs/Tabs";
import { MockTests } from "./MockTests";
import { School } from "./School";
import { ElevenPlus } from "./ElevenPlus";

interface ServicesProps {}

export enum MenuOptions {
  school = "School Support",
  elevenPlus = "11+ Preparation",
  tests = "Mock Tests",
}

export const Services: React.FC<ServicesProps> = ({}) => {
  const location = useLocation();
  const [menuOption, setMenuOption] = useState<MenuOptions>(
    location.state["option"]
      ? (location.state["option"] as MenuOptions)
      : MenuOptions.school
  );

  const getPage = () => {
    switch (menuOption) {
      case MenuOptions.school:
        return <School />;
      case MenuOptions.tests:
        return <MockTests />;
      case MenuOptions.elevenPlus:
        return <ElevenPlus />;
    }
  };

  const getSideBanner = () => {
    switch (menuOption) {
      case MenuOptions.school:
        return sideBanner2;
      case MenuOptions.tests:
        return sideBanner3;
      case MenuOptions.elevenPlus:
        return sideBanner4;
    }
  };

  return (
    <Page
      tab={Tab.services}
      page={getPage()}
      leftTile={
        <aside className="menu">
          <ul className="menu-list">
            {Object.values(MenuOptions).map((option) => (
              <li>
                <a
                  className={menuOption === option ? "is-active" : ""}
                  onClick={() => setMenuOption(option)}
                >
                  {option}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      }
      rightTile={
        <div>
          <img className="side-banner" src={getSideBanner()} />
        </div>
      }
    />
  );
};
