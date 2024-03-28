import React from "react";

import { Tab, Tabs } from "../Tabs/Tabs";
import { Logo } from "../widgets/Logo";

interface PageProps {
  page: React.ReactNode;
  tab: Tab;
  leftTile: React.ReactNode;
  rightTile: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({
  tab,
  leftTile,
  rightTile,
  page,
}) => {
  return (
    <div className="full-page">
      <div className="columns is-gapless page-banner">
        <div className="column">
          <Logo />
        </div>
        <div className="column page-tabs">
          <Tabs selectedTab={tab} />
        </div>
        <div className="column" />
      </div>
      <div className="columns is-gapless page-body">
        <div className="column is-narrow">
          <div className="side-banner">{leftTile}</div>
        </div>
        <div className="column">{page}</div>
        <div className="column is-narrow">
          <div className="side-banner">{rightTile}</div>
        </div>
      </div>
      <div className="columns is-gapless page-footer">
        <div className="column center-text">
          <h3>
            <strong>Address</strong>
          </h3>
          <h4>SurveyLine</h4>
          <h4>234 - 236 Broadway</h4>
          <h4>Bexleyheath</h4>
          <h4>DA6 8AS</h4>
        </div>
        <div className="column  center-text">
          <h3>
            <strong>Contact</strong>
          </h3>
          <h4>
            Email:{" "}
            <a href="mailto:enquiries@tuitionplus.uk">
              enquiries@tuitionplus.uk
            </a>
          </h4>
          <h4>
            Mobile: <a href="tel:+447852621245">+447852 621245</a>
          </h4>
        </div>
        <div className="column center-text">
          <h3>
            <strong>Opening Hours</strong>
          </h3>
          <h4>Mon - Thurs</h4>
          <h4>16:00 - 20:30</h4>
        </div>
      </div>
    </div>
  );
};
