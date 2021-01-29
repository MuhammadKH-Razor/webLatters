import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import home from '../pages/homepage';
import who from '../pages/siapaKami';


class Routing extends Component{

    render(){
        return(
          <Router>
            <div>
          <Route path="/" exact component={home}/> 
          <Route path="/payment" exact component={who}/> 
            </div>
          </Router>
        );
    }
}

export default Routing;