import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import React, { useState as UseState } from "react";
import { Manager } from "socket.io-client";
import { baseURL } from "configs/links";
import DeleteDemo from "../componenet/deleteModal";
import EditDemoModal from "../EditDemoModal"
import { OverlayTrigger, Tooltip } from "react-bootstrap";


const manager = new Manager(baseURL);
function cartenviV2(props) {
  function handleClick(event) {
    event.preventDefault();
    console.log('Button clicked!');
  }
  const [modalShow, setModalShow] = UseState(false);
  const [EditModalShow, setEditModalShow] = UseState(false);

  const { envi, accessPlay, accessKaraf, role, handelDEMO, id } = props;
  const socket = manager.socket("/"); // main namespace

  const [accessplay, setAccessplay] = UseState(false);
  const [accesskaraf, setAccesskaraf] = UseState(false);

  socket.on(`${accessPlay}`, (el) => {
    if (el === "active") {
      setAccessplay(true);
    } else {
      setAccessplay(false);
    }
  });
  socket.on(`${accessKaraf}`, (el) => {
    if (el === "active") {

      setAccesskaraf(true);
    } else {
      setAccesskaraf(false);
    }
  });

  return (
    <div className="mb-10 d-flex ">
      <div
        key={envi.id}
        className={` `}

      >

        {/* <iframe src={`http://192.168.0.120:3000`} widt={150}/> */}

        <Card
          className="   btn p-0  h-350px  w-350px"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",

            border: ` ${accesskaraf && accessplay
              ? " 1px solid#1BC5BE"
              : " 0.4px solid #f64e60"
              }`,
          }}
        >
          <Card.Body className=" row d-flex flex-column  justify-content-center align-items-center p-1">
            <div className={`  opacity-${accessplay ? "" : "20"}`}>
              {envi.logo.type === "svg" ? (
                <SVG
                  src={toAbsoluteUrl(`${envi.logo.url}`)}
                  width={envi.logo.width}
                />
              ) : (
                <Image
                  src={toAbsoluteUrl(`${envi.logo.url}`)}
                  width={envi.logo.width}
                />
              )}
            </div>
          </Card.Body>
          <Card.Footer className="p-0 m-0 bg-transparent border-0">
            <div className=" d-flex ">

              <div className="  align-items-center col-6 "
                data-toggle="tooltip"
                data-placement="rigth"
                data-container="body"
                data-boundary="window"
                onClick={(e) => {
                  if (!accessplay) {
                    handleClick(e)
                  }
                }}
              >

                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="latest-project">
                    {accessplay ? "Click pour access" : "il est pas disponible "
                    }</Tooltip>}
                >



                  <a href={`http://${envi.ip_play}:${envi.port_play}`} target="_blank" >


                    <div className=" d-flex align-items-center   "  >
                      <SVG
                        src={toAbsoluteUrl("/img/play.svg")}
                        className="w-100px "
                      />{" "}
                      <div
                        className={`text-nowrap px-4 text-${accessplay ? "success" : "danger"
                          } `}
                      >
                        <h6
                          style={{
                            fontSize: "15px",
                            margin: 0,
                          }}
                        >
                          {accessplay ? "active" : " not active"}
                        </h6>
                      </div>
                    </div>
                    <div>
                      <h6>{envi.ip_play}</h6>
                      <h6>{envi.port_play} </h6>
                      <h6>server</h6>
                      <h6>date</h6>
                      <h6>version</h6>
                    </div>

                  </a>


                </OverlayTrigger>

              </div>

              <div className="  align-items-center col-6 "
                data-toggle="tooltip"
                data-placement="rigth"
                data-container="body"
                data-boundary="window"
                onClick={(e) => {
                  if (!accesskaraf) {
                    handleClick(e)
                  }
                }}

              >

                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="latest-project">{accesskaraf ? "Click pour access" : "il est pas disponible "
                  } </Tooltip>}
                >

                  <a href={`http://${envi.ip_karaf}:${envi.port_karaf}/hicp`} target="_blank" className="">

                    <div className=" d-flex align-items-center  ">
                      <div className="w-100px  ">
                        <Image
                          src={toAbsoluteUrl("/img/apache-feather-tm-new.png")}
                        />
                      </div>

                      <div
                        className={`text-nowrap px-4 text-${accesskaraf ? "success" : "danger"
                          } `}
                      >
                        <h6
                          style={{
                            fontSize: "15px",
                            margin: 0,
                          }}
                        >
                          {accesskaraf ? "active" : " not active"}
                        </h6>

                      </div>


                    </div>
                    <div>
                      <h6>{envi.ip_karaf}</h6>
                      <h6>{envi.port_karaf} </h6>
                      <h6>server</h6>
                      <h6>date</h6>
                      <h6>version</h6>
                    </div>
                  </a>
                </OverlayTrigger>
              </div>
            </div>

          </Card.Footer>
        </Card>

      </div>
      <div>
        {role === "master" ? (
          <div className="pl-1 text-center">

            <span
              style={{
                display: "flex",
                top: -10,
                right: 0,
                zIndex: 1000,
              }}
              onClick={() => setModalShow(true)}
              className="position-relative btn btn-xs btn-icon btn-circle btn-danger btn-hover-text-primary btn-shadow"
            >
              <i className="ki ki-bold-close icon-xs text-white"></i>
            </span>
            <div className="pt-5">
              <span
                style={{
                  display: "flex",
                  top: -10,
                  right: 0,
                  zIndex: 1000,
                }}
                onClick={() => setEditModalShow(true)}
                className="position-relative btn btn-xs btn-icon btn-circle btn-light btn-hover-text-primary btn-shadow "
              >
                <i className="ki ki-gear icon-md text-info"></i>

              </span> 
            </div>
          </div>
        ) : null}
      </div>
      <DeleteDemo
        show={modalShow}
        onHide={() => setModalShow(false)}
        idDemo={envi.id}

        handelDEMO={handelDEMO}

      />
      <EditDemoModal
        showModel={EditModalShow}
        onHide={() => setEditModalShow(false)}
        idDemo={envi.id}
        handelDEMO={handelDEMO}
        envi={envi}
        companyId={id.id}
      />
    </div>
  );
}

export default cartenviV2;
