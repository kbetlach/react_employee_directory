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
    this.searchEmployeeFirstName();
  }

  searchEmployeeFirstName = () => {
    const searchQuery = this.state.search.trim();
    const searchResultsFirstName = EmployeeList.filter((employee) => employee.firstName === searchQuery);
    this.setState({ 'result': searchResultsFirstName });
  };

  searchEmployeeBirthDate = () => {
    const searchQuery = this.state.search.trim();
    const searchResultsBirthDate = EmployeeList.filter((employee) => employee.birthDate === searchQuery);
    this.setState({ 'result': searchResultsBirthDate });
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
    this.searchEmployeeFirstName();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-4" />
          <Col size="md-4">
            <SearchForm
              searchtype="First Name"
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
