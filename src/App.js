// @ts-ignore
import React from "react";
import LandingPage from "./Pages/landingPage";
import EmployeePage from "./Pages/EmployeePage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/EmployeeList" component={EmployeePage} />
      </Router>
    </div>
  );
};

export default App;
