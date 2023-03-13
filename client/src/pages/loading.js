import { AutorizedFunc } from "configs/auth";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { pushUserData } from "../redux/actions";
import { Redirect } from "react-router-dom";

const Loading = ({ pushUserData, user,  history, location }) => {
 

 

  return (
    <div id="splash-screen" className="kt-splash-screen">
      <img src="/media/logos/" alt="Asa" />
      <svg className="splash-spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  );
};

const mapStateToProps = ({ userreducer }) => {
  return userreducer;
};

export default withRouter(connect(mapStateToProps, { pushUserData })(Loading));
