import React from "react";
import EmployeeList from "../data/employees.json";

function EmployeeInfo(props) {
  console.log(props)

  const resultsFirstName = EmployeeList.filter(employee => employee.firstName.toLowerCase().includes(props.search.toLowerCase()));

  return (
    <div className="text-center">
      {resultsFirstName.length > 0 ? (
        <ul className="list-group">
          <h2>Searched Employees</h2>
          {resultsFirstName.map(result => (
            <li className="list-group-item" key={result.id}>
              <b>{result.firstName}</b> <b>{result.lastName}</b> || {result.email} || {result.phone} || {result.birthDate}
            </li>
          ))}
        </ul >
      ) : (
          <h2>No Results</h2>
        )}
    </div>
  );
}

export default EmployeeInfo;
