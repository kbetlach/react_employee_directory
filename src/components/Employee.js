import React from "react";

function Employees(props) {
  //Condition if statement and Map function to loop through array
  return (
    <div>
      {props.employeeList.length ? (
        <ul className="list-group">
          <h2>Employee Directory</h2>

          {props.employeeList.map(result => (
            <li className="list-group-item" key={result.id}>
              <b>{result.firstName}</b> {result.lastName} {result.birthDate}
            </li>
          ))}
        </ul >
      ) : (
          <h2>No employees found.</h2>
        )}
    </div>
  )
}

export default Employees;
