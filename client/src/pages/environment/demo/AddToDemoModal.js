import React, { useState as UseState, useEffect as UseEffect } from "react";
import { Form, Modal } from "react-bootstrap";
import { NotificationManager } from "react-notifications";
import SVG from "react-inlinesvg";
import { addDocument, uploadDocument } from "configs/upload";
import { toAbsoluteUrl } from "helpers";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
 
 function AddToDemoModal(props) {
  const {modalShow, onHide, id  ,handelDEMO } = props;
  let [brandcompany, setBrandcompany] = UseState(null);
  let [BrandcompanyThumbnail, setBrandcompanyThumbnail] = UseState(null);
  let [upload_loading, setUploadLoading] = UseState(false);
  let [upload_progress, setUploadProgress] = UseState(0);
  let [name, setName] = UseState([]);
  let [ip_play, setIp_play] = UseState([]);
  let [port_play, setPort_play] = UseState([]);
  let [ip_karaf, setIp_karaf] = UseState([]);
  let [port_karaf, setPort_karaf] = UseState([]);
  const [width, setWidth] = UseState(100);



  const changeWidth = (event) => {
    setWidth(event.target.value);
  };
 
  
  const handleFile = async (e) => {
    let file = e.target.files[0];
    try {
      if (file) {
        if (file.size > 5242880) {
          NotificationManager.warning(
            "",
            "la taille du fichier ne doit pas dépasser 15MB",
            10000
          );
        } else {
          let reader = new FileReader();
          reader.onloadend = () => {
            setBrandcompanyThumbnail(reader.result);
            setBrandcompany(file);

            
          };
          reader.readAsDataURL(file);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async () => {
    if (brandcompany === null) {
      NotificationManager.warning(
        "la taille du fichier ne doit pas dépasser 5MB",
        "Ajouter logo d'environment",
        2500
      );
    } else {
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
    }

    if (
      brandcompany != null &&
      name.length != 0 &&
      ip_play.length != 0 &&
      ip_karaf.length != 0 &&
      port_play.length != 0 &&
      port_karaf.length != 0 

    ) {
      setUploadLoading(true);
      var form_data = new FormData();
      form_data.append("file", brandcompany);
      const res = await uploadDocument(form_data, setUploadProgress);

      const document = {
        _id: id.id,
        _name: name,
        _ip_play: ip_play,
        _port_play: port_play,
        _ip_karaf: ip_karaf,
        _port_karaf: port_karaf,
        url: res.data.URL,
        width: width,
      };

      const response = await addDocument(document);
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
       show={modalShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
     
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Ajouter Demo
        </Modal.Title>
        <div className="btn btn-primary text-white" onClick={() => onHide()}>
          x
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="   d-flex justify-content-center align-items-center">
          <div className="  ">
            <h1 className="text-center pb-10">Ajouter votre environnement</h1>
            <label
              htmlFor="identity_file"
              className="col-12 dropzone-msg dz-message needsclick"
            >
              {brandcompany ? (
                <div className="  dropzone-secondary dropzone-clickable p-15">
                  <div className="col-12 position-relative">
                    <Card
                      className="   btn p-0  h-250px  w-350px"
                      style={{
                        background: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "16px",
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                        backdropFilter: "blur(5px)",
                      }}
                    >
                      <Card.Body className=" row d-flex flex-column  justify-content-center align-items-center p-1">
                        <div>
                          <span
                            style={{
                              display: BrandcompanyThumbnail ? "flex" : "none",
                              top: -10,
                              right: 0,
                              zIndex: 1000,
                            }}
                            className="position-absolute btn btn-xs btn-icon btn-circle btn-danger btn-hover-text-primary btn-shadow"
                            onClick={() => {
                              setBrandcompanyThumbnail(null);
                              setBrandcompany(null);
                            }}
                          >
                            <i className="ki ki-bold-close icon-xs text-white"></i>
                          </span>
                          <Image
                            src={toAbsoluteUrl(BrandcompanyThumbnail)}
                            width={width}
                          />
                        </div>
                      </Card.Body>
                      <Card.Footer className="p-0 m-0 bg-transparent border-0">
                        <div className=" d-flex ">
                          <div className="d-flex  align-items-center col-6">
                            <SVG
                              src={toAbsoluteUrl("/img/play.svg")}
                              className="w-100px "
                            />{" "}
                            <div>
                              <h6
                                style={{
                                  fontSize: "15px",
                                  margin: 0,
                                }}
                              ></h6>
                            </div>
                          </div>
                          <div className=" d-flex align-items-center col-6 ">
                            <div className="w-100px  ">
                              <Image
                                src={toAbsoluteUrl(
                                  "/img/apache-feather-tm-new.png"
                                )}
                              />
                            </div>

                            <div>
                              <h6
                                style={{
                                  fontSize: "15px",
                                  margin: 0,
                                }}
                              ></h6>
                            </div>
                          </div>
                        </div>
                      </Card.Footer>
                    </Card>
                    <div>
                      <input
                        type="range"
                        onChange={changeWidth}
                        min={1}
                        max={800}
                        step={1}
                        value={width}
                        className="form-range mt-10 w-100  "
                      ></input>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="dropzone dropzone-default dropzone-secondary dropzone-clickable p-15">
                    <input
                      name="avatar"
                      type="file"
                      className="d-none"
                      accept=".png, .jpg, .jpeg, .svg"
                      id="identity_file"
                      onChange={handleFile}
                      multiple
                    />
                    <h3 className="dropzone-msg-title">
                      {/* {t("identity_setup:UPLOAD_FILE_HERE")}
                                  {t("identity_setup:OR")}
                                  <br /> */}
                      téléchargez la marque de votre entreprise
                    </h3>
                    <span className="dropzone-msg-desc">
                      Taille de fichier maximale : 5 Mo
                    </span>
                  </div>
                </>
              )}
            </label>
            <div className="col-12">
              <Form>
                <Form.Group controlId="formBasicPassword"></Form.Group>

                <Form.Group controlId="formBasicPassword" className=" text-left">
                  <Form.Label>Name d'envirenment</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="envi....."
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
          Ajouter envirenment Demo
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
 
export default AddToDemoModal

 