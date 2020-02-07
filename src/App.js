import React from "react";
import Employees from "./components/Employee.js";
import EmployeeList from "./data/employees.json";

function App() {
    return <Employees employeeList={EmployeeList} />
}

export default App;