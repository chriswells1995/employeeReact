import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          onChange={event=> props.handleSearchChange(event)}
          name="search"
          type="search"
          className="form-control"
          placeholder="Search for employee"
          
        />

      </div>
    </form>
  );
}

export default SearchForm;
