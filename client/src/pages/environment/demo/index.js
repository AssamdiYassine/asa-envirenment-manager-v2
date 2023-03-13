import React, { useState as UseState, useEffect as UseEffect } from "react";
import { useParams as UseParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import CartenviV2 from "./componenet/cartenviV2";
import { getdemo, deleteDemo } from "configs/Envi";
import NavBar from "components/navbar/NavBar";
import AddToDemoModal from "./AddToDemoModal";

import {  getRole } from "configs/auth";

// import {dodf} from "../../environment";
function index(props) { 
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

  
  let id = UseParams();
  const [Demo, setDemo] = UseState([]);
  const [modalShow, setModalShow] = UseState(false);
  UseEffect(() => {
    let action = true;
    if (action) {
      handelDEMO();
      return () => {
        action = false;
      };
    }
  }, []);

  const handelDEMO = async () => {
    try {
      const res = await getdemo(id.id);
      setDemo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const Styles = makeStyles((theme) => ({
    progress: {
      margin: theme.spacing(2),
    },
  }));

  const classes = Styles();

  // add  demo

  return (
    <>
      <NavBar id={id} setModalShow={setModalShow} />

      <div className="d-flex flex-column flex-root">
        {/*begin::Page*/}
        <div className="d-flex flex-row flex-column-fluid page">
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
                <div className="row  d-flex justify-content-around align-items-center ">
                  {Demo.length !== 0 ? (
                    <>
                      {Demo.map((ev) => {
                        return (
                          <CartenviV2
                            envi={ev}
                            accessPlay={ev.accessPLay}
                            accessKaraf={ev.accessKaraf}
                            key={ev.id}
                            role={ role}
                            id={id}
                        
                            handelDEMO={handelDEMO}
                          />
                        );
                      })}
                    </>
                  ) : (
                    <div className=" d-flex  " style={{ marginTop: "20%" }}>
                      <div className=" d-flex justify-content-center align-items-center ">
                        <CircularProgress
                          className={classes.progress}
                          color="secondary"
                        />
                        loading ...
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/*end::Entry*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Wrapper*/}
        </div>

        {/*end::Page*/}
      </div>
      <AddToDemoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={id}
        modalShow={modalShow}
     
        handelDEMO={handelDEMO}
      />
    </>
  );
}

export default index;
