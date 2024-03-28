import React from "react";

import { Page } from "../../components/Page/Page";
import { Tab } from "../../components/Tabs/Tabs";
import { NavBox } from "../../components/widgets/NavBox";
import { MenuOptions } from "../Services/Services";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Page
      tab={Tab.home}
      page={
        <div className="column-stack flex centred">
          <div className="row-stack">
            <div className="m-2">
              <NavBox option={MenuOptions.school} />
            </div>
            <div className="m-2">
              <NavBox option={MenuOptions.elevenPlus} />
            </div>
          </div>
          <br />
          <div className="row-stack">
            <div className="m-2">
              <NavBox option={MenuOptions.tests} />
            </div>
            <div className="m-2">
              <NavBox option={MenuOptions.pricing} />
            </div>
          </div>
        </div>
      }
      leftTile={<div></div>}
      rightTile={<div></div>}
    />
  );
};
