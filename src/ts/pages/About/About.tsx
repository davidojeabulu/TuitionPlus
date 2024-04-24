import React from "react";

import sideBanner1 from "../../assets/side-banner-1.png";
import sideBanner2 from "../../assets/side-banner-2.png";
import { Page } from "../../components/Page/Page";
import { Tab } from "../../components/Tabs/Tabs";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <Page
      tab={Tab.about}
      page={
        <div className="content p-4">
          <p>
            Tuition Plus was established ... years ago in order to provide
            support to help students achieve their academic potential.
          </p>
          <p>
            Having worked in Primary Schools, completed her Early Child
            Psychology degree and Post Graduate Certificate of Education, and
            raising 4 children of her own, the founder, Katherine Ojeabulu, has
            amassed a wealth of experience that enables Tuition Plus to offer a
            comprehensive tuition plan to support a wide range of students at
            different abilities.
          </p>
          <p>
            This has been evidenced by the{" "}
            <strong>... students who have passed their 11+ examinations</strong>{" "}
            through her practice, as well as all of her 4 children succesfully
            attending Grammar Schools.
          </p>
          <p>
            The hope of Tuition Plus is that every student that attends the
            centre will go on to achieve considerably more than they would've
            thought, because of the work done at Tuition Plus.
          </p>
          <p>
            Should you wish to enquire about the services that Tuition Plus
            offer, please send an email to{" "}
            <a href="mailto:enquiries@tuitionplus.uk">
              enquiries@tuitionplus.uk
            </a>
          </p>
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
