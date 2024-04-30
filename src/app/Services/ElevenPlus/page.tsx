import React from "react";

import { Services, MenuOptions } from "@/components/widgets/Services";

const ElevenPlus: React.FC = () => {
  return (
    <Services
      menuOption={MenuOptions.elevenPlus}
      page={
        <div className="content p-4">
          <p>
            From the beginning of year 4, we provide an in-depth, robust course
            in preparation for the <strong>11+ selection tests</strong> that
            take place in year 6.
          </p>
          <p>
            This involves two lessons per week, in groups of 6-8, covering the
            subjects Mathematics, Verbal Reasoning, Non-Verbal Reasoning and
            English.
          </p>
          <p>
            The aim of the lessons are to provide students with a solid
            foundation and equip them with all the skills necessary to succeed
            in their 11+ examinations.
          </p>
          <p>
            Besides 11+ entrance examinations, we also provide preparation
            support for <strong>Independent School</strong> entrance tests, such
            as:
          </p>
          <p>
            With our teaching, we have seen{" "}
            <strong>over 120 students pass</strong> their 11+ entrance tests in
            the last 5 years.
          </p>
          <p>
            Should you wish to enquire about 11+ preparation, please send an
            email to{" "}
            <a href="mailto:enquiries@tuitionplus.uk">
              enquiries@tuitionplus.uk
            </a>
          </p>
        </div>
      }
    />
  );
};

export default ElevenPlus;
