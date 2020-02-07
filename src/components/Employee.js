import React from "react";
import "../styles/Employee.css";

function Employees(props) {
  //Condition if statement and Map function to loop through array
  return (
    <div>
      <div className="container">
      {props.employeeList.length ? (
        <ul className="list-group">
          <h2 className="text-center">Employee Directory</h2>

          {props.employeeList.map(result => (
            <li className="list-group-item" key={result.id}>
              <b>{result.firstName}</b> <b>{result.lastName}</b> || <b>Email:</b> {result.email} || <b>Date of Birth:</b> {result.birthDate}
            </li>
          ))}
        </ul >
      ) : (
          <h2>No employees found.</h2>
        )}
      </div>
    </div>
  )
}

export default Employees;
