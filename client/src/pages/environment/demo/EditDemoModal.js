import React, { useState as UseState, useEffect as UseEffect } from "react";
import { Form, Modal } from "react-bootstrap";
import { NotificationManager } from "react-notifications";
import SVG from "react-inlinesvg";
import {editDemo} from "configs/Envi";
import { toAbsoluteUrl } from "helpers";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
 
 function editDemoModal(props) {
  const {showModel, onHide, idDemo  ,handelDEMO ,envi,companyId } = props;
   
  let [upload_loading, setUploadLoading] = UseState(false);
  let [upload_progress, setUploadProgress] = UseState(0);
  let [name, setName] = UseState([]);
  let [ip_play, setIp_play] = UseState([]);   
  let [port_play, setPort_play] = UseState([]);
  let [ip_karaf, setIp_karaf] = UseState([]);
  let [port_karaf, setPort_karaf] = UseState([]);

  UseEffect(()=>{
    let isCancelled = false;
    if (isCancelled === false) {
    setName(envi.name);
    setIp_play(envi.ip_play);
    setPort_play(envi.port_play);
    setIp_karaf(envi.ip_karaf);
    setPort_karaf(envi.port_karaf); 
  }
  return () => {
    isCancelled = true;
  };
  },[])
 
  const handleClick = async () => {
  
      if (name.length === 0) {
        NotificationManager.warning("", "Ajouter nom d'environment", 2500);
      } else {
        if (ip_play.length === 0 || ip_karaf.length === 0 ) {
          NotificationManager.warning("", "Ajouter ip d'environment", 2500);
        } else {
          if (port_play.length === 0 || port_karaf.length === 0) {
            NotificationManager.warning("", "Ajouter Port d'environment", 2500);
          }
        }
      }
 
    if (

      name.length != 0 &&
      ip_play.length != 0 &&
      ip_karaf.length != 0 &&
      port_play.length != 0 &&
      port_karaf.length != 0 

    ) {
      setUploadLoading(true);
  
      const document = {
        companyId:companyId,
        _id:  idDemo,
        _name: name,
        _ip_play: ip_play,
        _port_play: port_play,
        _ip_karaf: ip_karaf,
        _port_karaf: port_karaf,

      };
      console.log(document);

      const response = await editDemo(document); 
      if (response.data.process === "done") {
        setUploadProgress(0);
        setUploadLoading(false);
        onHide();
        handelDEMO();
        NotificationManager.success(
          "Vous avez été enregistré avec succès l'environnement",
          "succès :) ",
          4000
        );
      }
    }
  };

  return (
    <>
    <Modal
       show={showModel}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
        Modifier Demo
        </Modal.Title>
        <div className="btn btn-primary text-white" onClick={() => onHide()}>
          x
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="   d-flex justify-content-center align-items-center">
          <div className="  ">
            <h1 className="text-center pb-10">Modifier votre environnement <span className="text-uppercase text-bold">{name}</span></h1>
            <label
              htmlFor="identity_file"
              className="col-12 dropzone-msg dz-message needsclick"
            >
        
           
            </label>
            <div className="col-12">
              <Form>
               
                <Form.Group controlId="formBasicPassword"></Form.Group>

                <Form.Group controlId="formBasicPassword" className=" text-left">
                  <Form.Label>Name d'envirenment</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="envi....."
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Form.Group>
                Play
                <div className="dropzone dropzone-default dropzone-secondary dropzone-clickable p-5 mb-3">

                <Form.Group controlId="formBasicIP" className=" text-left">
                  <Form.Label>IP</Form.Label>
                  <Form.Control
                    type="text"
                    maxLength={16}
                    value={ip_play}
                    placeholder="192.168......"
                    onChange={(e) => {
                      setIp_play(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPort" className=" text-left">
                  <Form.Label>Port</Form.Label>
                  <Form.Control
                   maxLength="4"
                   type="Number"
                   value={port_play}
                    placeholder="8182"
                    onChange={(e) => {
                    
                      setPort_play( e.target.value);
                    }}
         
                  />
                </Form.Group>
                </div>
                Karaf
                <div className="dropzone dropzone-default dropzone-secondary dropzone-clickable p-5 ">

                <Form.Group controlId="formBasicIP"  className=" text-left">
                  <Form.Label  >IP</Form.Label>
                  <Form.Control
                    type="text"
                    maxLength={16}
                    placeholder="192.168......"
                    value={ip_karaf}
                    onChange={(e) => {
                      setIp_karaf(e.target.value);
                    }}
                  />
                </Form.Group>
                
                <Form.Group controlId="formBasicPort" className=" text-left">
                  <Form.Label>Port</Form.Label>
                  <Form.Control
                   maxLength="4"
                   type="Number"
                    value={port_karaf}
                    placeholder="8182"
                    onChange={(e) => {
                    
                      setPort_karaf( e.target.value);
                    }}
         
                  />
                </Form.Group>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {upload_progress > 0 && (
          <div className="col-12 mt-2">
            <div className="drive-progress-container">
              <ProgressBar
                height={10}
                variant="success"
                now={upload_progress}
              />
            </div>
          </div>
        )}
        <button
          onClick={() => handleClick()}
          type="button"
          style={{ width: 200 }}
          disabled={upload_loading}
          className="btn btn-primary  w-100 text-white "
        >
          Modifier envirenment <span className="text-uppercase text-bold">{envi.name}</span>
          <span className="svg-icon svg-icon-md ml-2">
            <SVG
              className=""
              src="/media/svg/icons/Navigation/Arrow-right-white.svg"
              fill=""
            />
          </span>
          {upload_loading && (
            <span className="ml-3 spinner spinner-white"></span>
          )}
        </button>
      </Modal.Footer>
    </Modal>
   
    </>
  );
}
 
export default editDemoModal

 