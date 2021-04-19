
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import front from "./front";
import home from "./home";
import about from "./about";
import testimonials from "./testimonials"
import test from "./test"

class Routing extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={front} />
          <Route exact path="/front" component={front} />
          <Route exact path="/home" component={home}/>
          <Route exact path="/about" component={about}/>
          <Route exact path="/testimonials" component={testimonials}/>
          <Route exact path="/test" component={test}/>
          
          
        </Switch>
      </Router>
    );
  }
}
export default Routing;