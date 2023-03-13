import React, { useState as UseState, useEffect as UseEffect } from "react";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { pushUserData } from "../../../redux/actions";
import { useParams as UseParams } from "react-router-dom";
import Profil from "components/profil/profil";
import { PerFunc } from "configs/Envi";
import NavBar from "components/navbar/NavBar";
import {  getRole } from "configs/auth";

function index(props) {
 
  const [show, setShow] = UseState(false);
  const [performance, setPerformance] = UseState([]);
  const [search, setSearch] = UseState("");
  const [searchResults, setSearchResults] = UseState([]);
  const [performanceInfo, setPerformanceInfo] = UseState([]);

 let [modalShow, setModalShow] = UseState(false);
 const [role, setRole] = UseState("");

 UseEffect(() => {
   let isCancelled = false;
   if (isCancelled === false) {
 
     handelRole();
     
   }
   return () => {
     isCancelled = true;
   }; 

 }, [])
 const handelRole = async () => {
   const res = await getRole();
   setRole(res.data.role)
  }
  const hide = (bool) => {
    setShow(bool);
  };
  UseEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {
  
      handelPerf();

  
    }
    return () => {
      isCancelled = true;
    }; 
  }, []);
  let id = UseParams();

  const handelPerf = async () => {
    try {
      const res = await PerFunc(id.id);
      setPerformance(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handelInfo = (id) => {
    performance.map((el) => {
      if (el.id === Number(id)) {
        setPerformanceInfo(el.info);
      }
    });

    setShow(true);
  };

  //filter search
  UseEffect(() => {
    const filteredResults = performance.filter(
      (post) =>
        post.id
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase()) ||
        post.name
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [performance, search]);

  return (
    <>
      {" "}
      <NavBar id={id} query={search} setQuery={setSearch} />
      <div className="d-flex flex-column flex-root">
        {/*begin::Page*/}
        <div className="d-flex flex-row flex-column-fluid page">
          {/* {width >= "980" ? (
        <div className={` asidewidth `}>
          <Aside t={t} />
        </div>
      ) : ( */}

          {/* )} */}

          {/*begin::Wrapper*/}
          <div
            className="d-flex flex-column flex-row-fluid wrapper"
            id="kt_wrapper"
          >
            {/*begin::Content*/}
            <div
              id="kt_content"
              className={`content d-flex flex-column flex-column-fluid pt-0 `}
            >
              {/* <AnimateLoading /> */}
              {/* {headerTitle && <SubHeader headerTitle={headerTitle} />} */}
              <div className="container mt-10">
                <div className="row d-flex justify-content-around align-items-center ">
                  {searchResults.map((el) => (
                    <div
                      className=" col-4 d-flex"
                      key={el.id}
                      onClick={() => {
                        handelInfo(el.id);
                      }}
                    >
                      <Card className="mb-2 py-5  btn btn-warning w-100">
                        <Card.Body className="display-3  text-center">
                          <Card.Title className="display-5  text-center">
                            {" "}
                            environment:{el.id}{" "}
                          </Card.Title>

                          <div className="d-flex  text-center m-auto">
                            <Card.Title className="px-1 m-auto display-4">
                              {el.name}
                            </Card.Title>
                          </div>
                        </Card.Body>
                      </Card>
                      {role === "master" && (
                          <div className="ml-1">
                            <span
                              style={{
                                zIndex: 1000,
                              }}
                              // onClick={() => setModalShow(true)}
                              className="position-relative btn btn-xs btn-icon btn-circle btn-danger btn-hover-text-primary btn-shadow"
                            >
                              <i className="ki ki-bold-close icon-xs text-white"></i>
                            </span>
                            <div className="pt-5">
                              <span
                                style={{
                                  display: "flex",
                                  
                                  zIndex: 1000,
                                }}
                                // onClick={() => setEditModalShow(true)}
                                className="position-relative btn btn-xs btn-icon btn-circle btn-light btn-hover-text-primary btn-shadow "
                              >
                                <i className="ki ki-gear icon-md text-info"></i>

                              </span>
                            </div>
                          </div>

                        )}
                      
                    </div>
                  ))}
                </div>
              </div>
              {show && (
                <Profil show={show} hide={hide} postinfo={performanceInfo} />
              )}
              {/*end::Entry*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Page*/}
      </div>
    </>
  );
}


export default index;
