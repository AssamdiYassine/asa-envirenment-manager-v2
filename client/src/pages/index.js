//Dependencies
import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { Router } from './router';
import { connect } from "react-redux";
import Home from "./environment";
import Environment from "./environment/index";
import ErrorPage from "./ErrorPage";

// import Register from "./commun/register";
// import login from "./commun/auth/login";

// Layouts
 import LayoutEmpty from "layouts/LayoutEmpty";
//  import LayoutAuth  from "layouts/LayoutAuth";
  
// Router
// import Loading from "./loading";
// import Commun from './commun';

const Routes = ({ user,   loading })  => {
 
 
 
  return (
    <Switch>
    <Redirect from="/" exact={true} to="/entreprise" />
    {/* <Redirect from="/auth" exact={true} to="/auth/sign-in" /> */}

      {/* Auth Pages */}
      {/* <Router path="/auth/sign-in" routeName="sign-in"  component={Commun.Login}  layout={LayoutAuth}   /> */}
      {/*  <Router path="/auth/sign-up" routeName="sign-up"  component={Commun.Register}  layout={LayoutAuth}   /> */}
      <Router path="/entreprise/:id" routeName="entreprise"  component={Home}  layout={LayoutEmpty}   />
      <Router path="/entreprise" routeName="entreprise"  component={Home}  layout={LayoutEmpty}   />

      <Router path="/environment"  routeName='environment'  component={Environment} layout={LayoutEmpty} />
      {/* {getDedicatedRoutes(user)} */}

      <Router path="/404" exact component={ErrorPage} layout={LayoutEmpty} />
      <Redirect to="/404" />
    </Switch>
  );
}

const mapStateToProps = ({ userreducer }) => {
  return { ...userreducer };
};

export default connect(mapStateToProps)(Routes);

// const getDedicatedRoutes = (user) => {
//   if (user) {
    
    
//   }
// };
