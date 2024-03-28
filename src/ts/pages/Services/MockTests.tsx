import React from "react";

export const MockTests: React.FC = () => {
  return (
    <div className="content p-4">
      <p>
        In addition to 11+ tuition lessons, we provide mock examinations for
        students to practice exams under exam conditions.
      </p>
      <p>
        Papers will be marked and results with solutions provided to those who
        sit the mock exam.
      </p>
      <p>
        See <strong>Pricing</strong> tab for the pricing for sitting mock exams.
      </p>
      <p>
        Although these are not compulsory, doing mock exams are very beneficial.
        They enable students to:
      </p>
      <ul>
        <li>Practise working under time conditions.</li>
        <li>
          Perfect exam techniques (such as maximising marks when unsure of an
          answer).
        </li>
        <li>Familiarise themselves with the format of the exam.</li>
      </ul>
      <p>
        Should you wish to book for these mock tests, view the dates and times
        of the tests below and send an email to{" "}
        <a href="mailto:enquiries@tuitionplus.uk">enquiries@tuitionplus.uk</a>
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
  );
};