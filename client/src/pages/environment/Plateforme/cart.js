import React, { useState as UseState, useEffect as UseEffect } from "react";

import Card from "react-bootstrap/Card";
import DeleteDemo from "./deleteModal";
import {  getRole } from "configs/auth";

function cart(props) {
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
  const { envi,  handelperf } = props;
 

  const [modalShow, setModalShow] = UseState(false);
 
  return (
    <>
      <div className="px-5 mb-10">
        <a href={`${envi.link}`} target="_blank">
          <Card
            className="   btn p-0  h-250px  w-350px"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
            }}
          >
            <Card.Body className=" row d-flex  justify-content-center align-items-center p-1">
              <h3
                className={" text-uppercase text-dark w-100 "}
                style={{ fontSize: 25, fontWeight: "bold " }}
              >
                {envi.name}
              </h3>
            </Card.Body>
            <Card.Footer className="p-0 m-0 bg-transparent border-0"></Card.Footer>
          </Card>
        </a>

        {role === "master" ? (
          <span
            style={{
              display: "flex",
              top: "-259px",
              right: " -329px",
              zIndex: 1000,
            }}
            onClick={() => setModalShow(true)}
            className="position-relative btn btn-xs btn-icon btn-circle btn-danger btn-hover-text-primary btn-shadow"
          >
            <i className="ki ki-bold-close icon-xs text-white"></i>
          </span>
        ) : null}
         <DeleteDemo
            idplat={envi.id}
        show={modalShow}
        onHide={() => setModalShow(false)}
     
 
        handelperf={handelperf}
      />
      </div>

     
    </>
  );
}

export default cart;
