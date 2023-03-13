import React, { useState as UseState, useEffect as UseEffect } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  InputGroup,
  Image,
} from "react-bootstrap";
import { useHistory as UseHistory } from "react-router-dom";

import { NavLink, Link } from "react-router-dom";
import { toAbsoluteUrl } from "helpers";
 
import {  getRole } from "configs/auth";


function NavBar(props) {
  const [role, setRole] = UseState("");

  UseEffect(() => {
    handelRole();
  }, [])
  const handelRole = async () => {
    const res = await getRole();
    setRole(res.data.role)
   }
   
 

 
  const { id, query, setQuery, setModalShow  } = props;
  const [isDemo, setIsDemo] = UseState(false);
 
  const history = UseHistory();
  const logoutClick = () => {
    localStorage.removeItem("ROLE");
 
    history.push("/entreprise");
  };

  UseEffect(() => {
    if (history.location.pathname.includes("/demo")) {
      setIsDemo(true);
    } else {
      setIsDemo(false);
    }
  }, []);

  return (
    <>
      <div id="kt_header" className="header header-fixed ">
        <div className="container-fluid d-flex align-items-stretch justify-content-between pl-5">
          <div
            id="kt_header_menu_wrapper"
            className="d-flex header-menu-wrapper header-menu-wrapper-left"
          >
            <Navbar className="parentNav p-0" bg="white" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Link to={"/entreprise"} className="d-flex align-items-center">
                <Image
                  src={toAbsoluteUrl("/img/kms.svg")}
                  style={{ width: "150px" }}
                />
              </Link>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <NavLink
                    to={`/environment/${id.name}/development/${id.id}`}
                    activeClassName="active"
                    className="ml-5"
                  >
                    <Nav href="#Development" className="myP">
                      Development
                    </Nav>
                  </NavLink>
                  <NavLink
                    to={`/environment/${id.name}/test/${id.id}`}
                    activeClassName="active"
                    className="ml-5"
                  >
                    <Nav href="#Test" className="myP">
                      Test
                    </Nav>
                  </NavLink>
                  <NavLink
                    to={`/environment/${id.name}/performance/${id.id}`}
                    activeClassName="active"
                    className="ml-5"
                  >
                    <Nav href="#Performance" className="myP">
                      Performance
                    </Nav>
                  </NavLink>
                  <NavLink
                    to={`/environment/${id.name}/demo/${id.id}`}
                    activeClassName="active"
                    className="ml-5"
                  >
                    <Nav href="#Demo" className="myP">
                      Demo
                    </Nav>
                  </NavLink>
                  <NavLink
                    to={`/environment/${id.name}/plateforme/${id.id}`}
                    activeClassName="active"
                    className="ml-5"
                  >
                    <Nav href="#Plateforme" className="myP">
                      Plateforme
                    </Nav>
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
          <div className="d-flex">
            {!isDemo && (
              <div className="topbar align-items-center">
                <Form inline className="m-0">
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text
                        id="inputGroupPrepend"
                        className="iconSearch"
                      >
                        <i className="fas fa-search"></i>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      type="text"
                      placeholder="Search..."
                      className="mr-sm-3 inputSearch w-250px"
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                      }}
                    />
                  </InputGroup>
                </Form>
              </div>
            )}
            <div className="d-flex align-items-center">
              {role === "master" && isDemo ? (
                <button
                  onClick={() => setModalShow(true)}
                  type="button"
                  style={{ width: 200 }}
                  className="btn btn-primary  w-100 text-white "
                >
                  Ajouter envirenment
                </button>
              ) : (
                <></>
              )}

              <button
                
                onClick={() => logoutClick()}
                type="button"
                className="btn btn-primary  text-white flex-nowrap text-nowrap ml-3"
              >
                logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default  NavBar;
