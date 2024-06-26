import React from "react";
import Link from "next/link";

import sideBanner2 from "../../../public/side-banner-2.png";
import sideBanner3 from "../../../public/side-banner-3.png";
import sideBanner4 from "../../../public/side-banner-4.png";
import { Page } from "../Page/Page";
import { Tab } from "../Tabs/Tabs";
import Image from "next/image";

interface ServicesProps {
  menuOption: MenuOptions;
  page: React.ReactNode;
}

export enum MenuOptions {
  elevenPlus = "11+ Preparation",
  tests = "Mock Tests",
}

export const get_url = (option: MenuOptions) => {
  switch (option) {
    case MenuOptions.tests:
      return "/Services/MockTests";
    case MenuOptions.elevenPlus:
      return "/Services/ElevenPlus";
  }
};

export const Services: React.FC<ServicesProps> = ({ menuOption, page }) => {
  const getSideBanner = () => {
    switch (menuOption) {
      case MenuOptions.tests:
        return sideBanner3;
      case MenuOptions.elevenPlus:
        return sideBanner4;
    }
  };

  return (
    <Page
      tab={Tab.services}
      page={page}
      leftTile={
        <aside className="menu">
          <ul className="menu-list">
            {Object.values(MenuOptions).map((option) => (
              <li key={option}>
                <Link
                  className={menuOption === option ? "is-active" : ""}
                  href={get_url(option)}
                >
                  {option}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      }
      rightTile={
        <div>
          <Image
            className="side-banner"
            alt="Side banner"
            src={getSideBanner()}
          />
        </div>
      }
    />
  );
};
