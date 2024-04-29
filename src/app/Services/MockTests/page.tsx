import React from "react";

import { Services, MenuOptions } from "@/components/widgets/Services";

const MockTests: React.FC = () => {
  return (
    <Services
      menuOption={MenuOptions.school}
      page={
        <div className="content p-4">
          <p>
            In addition to 11+ tuition lessons, we provide mock examinations for
            students to practice exams under exam conditions.
          </p>
          <p>
            Papers will be marked and results with solutions provided to those
            who sit the mock exam.
          </p>
          <p>
            Although these are <strong>not compulsory</strong>, doing mock exams
            are very beneficial. They enable students to:
          </p>
          <ul>
            <li key="1">Practise working under time conditions.</li>
            <li key="2">
              Perfect exam techniques (such as maximising marks when unsure of
              an answer).
            </li>
            <li key="3">Familiarise themselves with the format of the exam.</li>
          </ul>
          <p>
            Should you wish to book for these mock tests, view the dates and
            times of the tests below and send an email to{" "}
            <a href="mailto:enquiries@tuitionplus.uk">
              enquiries@tuitionplus.uk
            </a>
          </p>
          <div className="results-table-container">
            <table className="results-table">
              <thead>
                <th>Date</th>
                <th>Test</th>
                <th>Start Time</th>
                <th>Finish Time</th>
              </thead>
              <tbody>
                <tr>
                  <td>6-Apr-2024</td>
                  <td>Kent</td>
                  <td>12:00</td>
                  <td>15:00</td>
                </tr>
                <tr>
                  <td>20-Apr-2024</td>
                  <td>Bexley</td>
                  <td>12:00</td>
                  <td>15:00</td>
                </tr>
                <tr>
                  <td>4-May-2024</td>
                  <td>Kent</td>
                  <td>12:00</td>
                  <td>15:00</td>
                </tr>
                <tr>
                  <td>18-May-2024</td>
                  <td>Kent</td>
                  <td>12:00</td>
                  <td>15:00</td>
                </tr>
                <tr>
                  <td>1-Jun-2024</td>
                  <td>Bexley</td>
                  <td>12:00</td>
                  <td>15:00</td>
                </tr>
                <tr>
                  <td>15-Jun-2024</td>
                  <td>Kent</td>
                  <td>12:00</td>
                  <td>15:00</td>
                </tr>
                <tr>
                  <td>29-Jun-2024</td>
                  <td>Newstead Woods</td>
                  <td>12:00</td>
                  <td>15:00</td>
                </tr>
                <tr>
                  <td>29-Jun-2024</td>
                  <td>St Olaves'</td>
                  <td>12:00</td>
                  <td>15:00</td>
                </tr>
                <tr>
                  <td>13-July-2024</td>
                  <td>Kent</td>
                  <td>12:00</td>
                  <td>15:00</td>
                </tr>
                <tr>
                  <td>27-July-2024</td>
                  <td>Bexley</td>
                  <td>12:00</td>
                  <td>15:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      }
    />
  );
};

export default MockTests;
