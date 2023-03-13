import NavBar from "components/navbar/NavBar";
import { useParams as UseParams } from "react-router-dom";
import React, { useState as UseState, useEffect as UseEffect } from "react";
import { connect } from "react-redux";
import { pushUserData } from "../../../redux/actions";
import { Platforme } from "configs/platforme";
import SubHeader from "components/subheader/SubHeader";
import Cart from "./cart";
import AddModal from "./addModel";
import {  getRole } from "configs/auth";
 
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
  let [perf, setPerf] = UseState([]);
  let [modalShow, setModalShow] = UseState(false);
  
 
  UseEffect(() => {
    let action = true;
    if (action) {
      handelperf();
      return () => {
        action = false;
      };
    }
  }, []);

  const handelperf = async () => {
    try {
      const res = await Platforme(id.id);
      setPerf(res.data.platforme);
 
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <>
      <div>
        <NavBar
          id={id}
          // query={search} setQuery={setSearch}
        />
        {role=== "master" ?<>
        <SubHeader setModalShow={setModalShow} />
        
        </> : null}
        <div className="container mt-10">
          <div className="row  d-flex justify-content-center align-items-center ">
            {perf.map((el) => (
              <Cart key={el.id} envi={el}   handelperf={handelperf} />
            ))}
          </div>
        </div>
      </div>
      <AddModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={id}
        
        handelperf={handelperf}
      />
    </>
  );
}
const mapStateToProps = ({ userreducer }) => {
  return {
    user: userreducer.user,
     
  };
};
export default connect(mapStateToProps, { pushUserData })(index);
