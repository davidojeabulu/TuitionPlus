import React from "react";

import sideBanner1 from "../../assets/side-banner-1.png";
import sideBanner2 from "../../assets/side-banner-2.png";
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
        <div className="row-stack flex centred wrap">
          <div className="m-2">
            <NavBox option={MenuOptions.school} />
          </div>
          <div className="m-2">
            <NavBox option={MenuOptions.elevenPlus} />
          </div>
          <div className="m-2">
            <NavBox option={MenuOptions.tests} />
          </div>
        </div>
      }
      leftTile={
        <div>
          <img className="side-banner" src={sideBanner1} />
        </div>
      }
      rightTile={
        <div>
          <img className="side-banner" src={sideBanner2} />
        </div>
      }
    />
  );
};
