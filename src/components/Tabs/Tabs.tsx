import React from "react";
import Link from "next/link";

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
  const getURL = (tab: Tab) => {
    switch (tab) {
      case Tab.home:
        return "/";
      case Tab.about:
        return "/About";
      case Tab.contact:
        return "/Contact";
      default:
        return `/${tab}/MockTests`;
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
            <Link href={getURL(tab)}>{tab}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
