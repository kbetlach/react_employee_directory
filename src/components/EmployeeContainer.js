import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Header from "./Header";
import SearchForm from "./SearchForm";
import EmployeeInfo from "./EmployeeInfo";
import EmployeeList from "../data/employees.json";
import "../styles/style.css";

class EmployeeContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  componentDidMount() {
    this.searchEmployee();
  }

  searchEmployee = () => {
    const searchQuery = this.state.search.trim();
    const searchResultsFirstName = EmployeeList.filter((employee) => employee.firstName === searchQuery);
    this.setState({ 'result': searchResultsFirstName });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee();
  };

  render() {
    return (
      <Container>
        <Header></Header>
        <br />
        <Row>
          <Col size="md-2" />
          <Col size="md-8">
            <SearchForm
              searchtype="Employee"
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
          <Col size="md-2" />
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <EmployeeInfo search={this.state.search} />
          </Col>
        </Row>
      </Container >
    );
  }
}

export default EmployeeContainer;
