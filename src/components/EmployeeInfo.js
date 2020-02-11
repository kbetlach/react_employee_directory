import React from "react";
import EmployeeList from "../data/employees.json";
import "../styles/style.css";

function EmployeeInfo(props) {
  console.log(props)

  const results = EmployeeList.filter(employee => 
    employee.firstName.toLowerCase().includes(props.search.toLowerCase()) || employee.lastName.toLowerCase().includes(props.search.toLowerCase()) || employee.birthDate.toLowerCase().includes(props.search.toLowerCase()));

  return (
    <div className="text-center">
      {results.length > 0 ? (
        <ul className="list-group">

          <h2>Employee List</h2>
          <br />

          <div className="row">
            <div className="col-md-3"><b>Name</b></div>
            <div className="col-md-3"><b>Email</b></div>
            <div className="col-md-3"><b>Phone Number</b></div>
            <div className="col-md-3"><b>Birth Date</b></div>
          </div>

          {results.map(result => (
            <li className="list-group-item" key={result.id}>
              <div className="row">
                <div className="col-md-3"><b>{result.firstName}</b> <b>{result.lastName}</b></div> 
                <div className="col-md-3">{result.email}</div>
                <div className="col-md-3">{result.phone}</div>
                <div className="col-md-3">{result.birthDate}</div>
              </div>
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
