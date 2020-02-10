import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";
import EmployeeInfo from "./EmployeeInfo";
import EmployeeList from "../data/employees.json";

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
    const searchResults = EmployeeList.filter((employee) => employee.firstName === searchQuery);
    this.setState({ 'result': searchResults });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-4" />
          <Col size="md-4">
            <SearchForm
              searchtype="firstName"
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
          <Col size="md-4" />
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
