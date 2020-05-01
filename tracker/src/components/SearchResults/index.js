import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <table className="list-group search-results"><tbody>
      {props.users.map(({login, name, phone}) => {
        return (
        <tr key = {login.uuid}>
          <td>
              {name.first} {name.last}
          </td>
          <td>
            {phone}
          </td>
        </tr>
        );
      })}  
   </tbody></table>
  );
}

export default SearchResults;
