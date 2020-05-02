import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchResults from "../components/SearchResults";
import SearchForm from "../components/SearchForm"
import Sort from "../components/Sort"
import AgeSort from "../components/AgeSort"


// Call random User API
// Return a list of random users' name, address, and phone number
// Render that information to the page

// create a search bar which can filter the visable users based on the input


class Search extends Component {
  state = {

    users:  [],
    filteredUsers: [],
    sortedUsers: []
  
    
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
          filteredUsers: res.data.results,
          sortedUsers: res.data.results
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
       return (user.name.first.toLowerCase().indexOf(searchValue)!==-1 ||
       user.name.last.toLowerCase().indexOf(searchValue)!==-1 ||
       user.phone.toLowerCase().indexOf(searchValue)!==-1 ||
       user.email.toLowerCase().indexOf(searchValue)!==-1 

       )         
    })
    this.setState({ filteredUsers: filteredList });
  };

//   handleABC = () =>{
//  const sortedList = this.state.users
//   .sort(function(a, b) {
//    if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
//    if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
//    return 0;
//   })
//   .map((item, i) => <Search key={i} data={item} />);

//   this.setState({sortedUsers: sortedList})
//   }

handleABC = () =>{
  console.log('working')
console.log(this.state.filteredUsers)

const sortedNames =this.state.filteredUsers.map(user =>user.name.last ).sort()
// const sortedNames = this.state.filteresUsers.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1)
console.log(sortedNames)
console.log("original")
console.log(this.state.filteredUsers)
const indexes = this.state.filteredUsers.map(user => sortedNames.indexOf(user.name.last) )
console.log(indexes)

const sortedList = indexes.map(index => this.state.filteredUsers[index])
  // const sortedList = this.state.users
  console.log("Sorted List")
  console.log(sortedList)
  this.setState({ filteredUsers: sortedList });

}

 handleAgeSort = () =>{
  const Ages =this.state.filteredUsers.map(user =>user.dob.date )
  var sortedAges =Ages.map(age => age)
  sortedAges.sort();
  const ageOrder = sortedAges.map(sortedAge => Ages.indexOf(sortedAge))

  const orderedByAges = ageOrder.map(number => this.state.filteredUsers[number])
  console.log(orderedByAges)
// console.log(sortedAges)
// console.log(this.state.filteredUsers[0].dob)
// const ageSortedUsers=this.state.filteredUsers.map(users => users.dob)
// console.log(ageSortedUsers)
// const newListAges = sortedAges.map(age => this.state.filteredUsers[sortedAges.indexOf(age)]   )
this.setState({ filteredUsers: orderedByAges });

 }

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
                    <Sort handleABC = {this.handleABC} ></Sort>
                    <AgeSort handleAgeSort = {this.handleAgeSort} ></AgeSort>


          <SearchResults users={this.state.filteredUsers} />


        </Container>
      </div>
    );
  }
}

export default Search;
