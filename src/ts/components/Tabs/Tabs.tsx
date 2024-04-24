import React from "react";
import { useNavigate } from "react-router-dom";
import { MenuOptions } from "../../pages/Services/Services";

export enum Tab {
  home = "Home",
  services = "Services",
  about = "About Us",
  contact = "Contact",
}

interface TabsProps {
  selectedTab: Tab;
}

export const Tabs: React.FC<TabsProps> = ({ selectedTab }) => {
  const navigate = useNavigate();

  const getURL = (tab: Tab) => {
    switch (tab) {
      case Tab.home:
        return "/";
      case Tab.about:
        return "/About";
      default:
        return `/${tab}`;
    }
  };

  return (
    <div className="tabs is-centered is-bottom">
      <ul>
        {Object.values(Tab).map((tab) => (
          <li
            className={
              tab === selectedTab
                ? "is-active white-background"
                : "white-background"
            }
            key={tab}
          >
            <a
              onClick={() =>
                navigate(
                  getURL(tab),
                  tab === Tab.services
                    ? { state: { option: MenuOptions.school } }
                    : undefined
                )
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
