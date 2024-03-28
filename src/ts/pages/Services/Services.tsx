import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Page } from "../../components/Page/Page";
import { Tab } from "../../components/Tabs/Tabs";
import { MockTests } from "./MockTests";
import { School } from "./School";
import { ElevenPlus } from "./ElevenPlus";
import { Pricing } from "./Pricing";

interface ServicesProps {}

export enum MenuOptions {
  school = "School Support",
  elevenPlus = "11+ Preparation",
  tests = "Mock Tests",
  pricing = "Pricing",
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
      case MenuOptions.pricing:
        return <Pricing />;
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
      rightTile={<div></div>}
    />
  );
};
