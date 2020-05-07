import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <table className="list-group search-results"><tbody>
      <tr>
        <td><h3>Name</h3></td>
        <td><h3>Phone Number</h3></td>
        <td><h3>Picture</h3></td>
        <td><h3>Email</h3></td>
        <td><h3>DOB</h3></td>

      </tr>
      {props.users.map(({login, name, phone, picture, dob, email}) => {
        return (
        <tr key = {login.uuid}>
          <td>
              {name.first} {name.last}
          </td>
          <td>
            {phone}
          </td>
          <td>
         <img src = {picture.thumbnail} alt = "Employee Pic"></img> 
          </td>
          <td>
          {email}
          </td>
          <td>
          {dob.date}
          </td>
        </tr>
        );
      })}  
   </tbody></table>
  );
}

export default SearchResults;
