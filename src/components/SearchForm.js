import React from "react";

function SearchForm(props) {
  return (
    <div className="card text-center">
      <div className="card-body"></div>
      <form>
        <div className="form-group" style={{ padding: '22px' }}>
          <label htmlFor="search">{props.searchtype} Search</label>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            searchtype={props.searchtype}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search By Employee First Name"
            id="search"
          />
          <br />
            <input
            onChange={props.handleInputChange}
            value={props.value}
            searchtype={props.searchtype}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search By Employee Birth Date"
            id="search"
          />
          <br />
        </div>
      </form>
    </div>

  );
}

export default SearchForm;
