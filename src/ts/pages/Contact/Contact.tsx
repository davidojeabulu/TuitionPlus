import React from "react";

import { Page } from "../../components/Page/Page";
import { Tab } from "../../components/Tabs/Tabs";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <Page
      tab={Tab.contact}
      page={
        <div className="column-stack content">
          <div>
            <h1>Contact us</h1>
            <p>
              Should you have any enquiries or wish to book for Mock
              examinations, please contact us via:
            </p>
            <p>
              Mobile: <a href="tel:+447852621245">+447852 621245</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:enquiries@tuitionplus.uk">
                enquiries@tuitionplus.uk
              </a>
            </p>
          </div>
          <br />
          <div>
            <h1>Find us</h1>
            <p>
              You can find us at the following address on Mondays to Thursdays
              from 16:00 - 20:30:
            </p>
            <p>SurveyLine</p>
            <p>234 - 236 Broadway</p>
            <p>Bexleyheath</p>
            <p>DA6 8AS</p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.018521736992!2d0.13485257651600974!3d51.457816371801975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8aef686105149%3A0x18b1dba8ce9524db!2sSurveyline%20Chartered%20Surveyors%20and%20RICS%20Registered%20Valuers!5e0!3m2!1sen!2suk!4v1711566801515!5m2!1sen!2suk"
              width="600"
              height="450"
              loading="lazy"
            />
          </div>
        </div>
      }
      leftTile={<div className="blank-side-banner"></div>}
      rightTile={<div className="blank-side-banner"></div>}
    />
  );
};
