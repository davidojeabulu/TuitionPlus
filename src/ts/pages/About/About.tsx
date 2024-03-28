import React from "react";

import { Page } from "../../components/Page/Page";
import { Tab } from "../../components/Tabs/Tabs";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <Page
      tab={Tab.about}
      page={<div></div>}
      leftTile={<div></div>}
      rightTile={<div></div>}
    />
  );
};
