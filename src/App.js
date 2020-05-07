import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
  
          <Route exact path="/" component={Home} />

       
      </div>
    </Router>
  );
}

export default App;
