import React from "react";
import "../styles/style.css";

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
            placeholder="Search By First or Last Name, or Birth Date"
            id="search"
          />
          <br />
        </div>
      </form>
    </div>

  );
}

export default SearchForm;
