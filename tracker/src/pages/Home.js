import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchResults from "../components/SearchResults";
import SearchForm from "../components/SearchForm"


// Call random User API
// Return a list of random users' name, address, and phone number
// Render that information to the page

// create a search bar which can filter the visable users based on the input


class Search extends Component {
  state = {

    users:  [],
    filteredUsers: []
  
    
  };
  // image: "",
  //   name: "",
  //   phone: "",
  //   email: "",
  //   dob: ""
  // When the component mounts, get a list of all users
  componentDidMount() {
    API.getRandomUsers()
          .then(function (res) {
            console.log(res.data.results)
            return res;
          } )
      .then(res => this.setState(
        { 
          users: res.data.results,
          filteredUsers: res.data.results
        }))
      .catch(err => console.log(err));
  }

  // componentDidMount() {
  //   API.getRandomUsers()
  //     .then(res=>console.log(res) )
  //     .catch(err => console.log(err));
  // }

  handleSearchChange = event => {
    const searchValue = event.target.value;
    const filteredList = this.state.users.filter(user=>{
       return (user.name.first.indexOf(searchValue)!==-1 )         
    })
    this.setState({ filteredUsers: filteredList });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getDogsOfBreed(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };

  // 

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Employees</h1>

          <SearchForm handleSearchChange = {this.handleSearchChange}>

          </SearchForm>
          <SearchResults users={this.state.filteredUsers} />


        </Container>
      </div>
    );
  }
}

export default Search;
