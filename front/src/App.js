import React, { Component } from 'react';
import SearchPage from "./searchPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul> */}
  
        <hr />
  
        <Route exact path="/" component={SearchPage} />
      </div>
    </Router>
    );
  }
}

export default App;
