import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Development from "./Developement/index.js";
import Test from "./test/index";
import Performance from "./performance";
import { connect } from 'react-redux';
 import Plateforme from "./Plateforme"
import Demo from './demo'
 function index(props) {
 

  return (
    <Switch>
      <Redirect from={`/environment`} exact to={`/environment/:name/development/:id`} />

      <Route path={`/environment/:name/development/:id`} component={Development} />
      <Route path={`/environment/:name/test/:id`} component={Test} />
      <Route path={`/environment/:name/performance/:id`} component={Performance} />
      <Route path={`/environment/:name/demo/:id`} component={Demo}   />
      {/* <Route path={`/environment/:name/addToDemo`} component={AddEnvi}  /> */}
      <Route path={`/environment/:name/plateforme/:id`} component={Plateforme}  />
      <Redirect to="/404" />
    </Switch>
  );
}
 

 const mapStateToProps = ({ userreducer }) => {
  return { ...userreducer };
};

export default connect(mapStateToProps)(index);


