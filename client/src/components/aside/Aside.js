/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Brand } from "components/brand/Brand";
import {  useParams  } from 'react-router-dom';
import { useHistory as UseHistory } from "react-router-dom";

export function Aside(props) {

  const history = UseHistory();
  // let id  = useParams();
 const info = history.location.state
    console.log(history.location.state);
  return (
    <>
      {/* begin::Aside */}


      <div
        id="kt_aside"
        className={`aside aside-left d-flex aside-fixed `}

      >
        {/* begin::Primary */}
        <div className="aside-primary d-flex flex-column align-items-center flex-row-auto w-150px  ">
        <Link to={'/'}>
         <Brand  />
        </Link>
         
          {/* begin::Nav Wrapper */}
          {/* Remove " flex-column-fluid "::To solve aside footer bottom padding */}
          <div className="aside-nav d-flex flex-column align-items-center py-5 px-4 scrollA scrollA-pull">
                <div className={``}>
                  {/* begin::Nav */}
                  <ul className="list-unstyled flex-column" role="tablist">
                    {/* begin::Item */}

                    <div className="aside-separator" />
                    <MyNavLink
                      txt={"Development"}
                      link={`/environment/development/`}
                    />

                    <MyNavLink
                      txt={"test"}
                      link={`/test`}
                    />

                    <MyNavLink
                      txt={"performance"}
                      link={`/performance`}
                    />
                    <MyNavLink
                      txt={"demo"}
                      link={`/demo`}
                    />

                    {/* end::Item */}
                  </ul>
                </div>

                {/* end::Nav */}
              </div>
          <div
            className=" aside-footer d-flex flex-column align-items-center flex-column-auto pt-4 py-lg-10 "
            style={{ marginTop: "auto" }}>
            
          </div>
          {/* end::Nav Wrapper */}
        </div>
        {/* end::Primary */}
      </div>
      {/* end::Aside */}
    </>
  );
}

function MyNavLink({ link , txt }) {
  return (
    <li
      className="nav-item mb-3 py-10"
      
    >
   
        <NavLink
          to={`${link}`}
          activeClassName="active"
          className="nav-link btn   btn-clean btn-lg"
        >
         {txt}
       
        </NavLink>
   
    </li>
  );
}
