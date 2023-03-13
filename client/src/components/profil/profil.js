import React from "react";

import { connect } from "react-redux";
import { toAbsoluteUrl } from "helpers";
import SVG from "react-inlinesvg";

function Profil(props) {
  const { postinfo } = props;
  return (
    <>
      {props.show ? (
        <>
          <div
            className=" offcanvas offcanvas-right p-5 offcanvas-on"
            style={{ width: "28%" }}
          >
            <div
              className="offcanvas-header d-flex align-items-center justify-content-end pb-5"
              kt-hidden-height={40}
            >
              <a
                href="#"
                className="btn btn-xs btn-icon btn-light btn-hover-primary "
                id="kt_quick_user_close"
                onClick={() => props.hide(false)}
              >
                <i className="ki ki-close icon-xs text-muted" />
              </a>
            </div>
            <div
              className="offcanvas-content"
              style={{ height: "100%", overflow: "hidden" }}
            >
              {/*begin::Header*/}
              <div className="row d-flex align-items-center mt-5 pl-5 text-left justify-content-center">
                <div className="d-flex flex-column">
                  {/* <a
                    href="#"
                    className="font-weight-bold font-size-h3 text-dark-75 text-hover-primary"
                  >
                    Environment ID : {props.postinfo.id}
                  </a>
                  <div className="text-dark-75 font-weight-bolder font-size-h3 mt-1">
                    Environment name : {props.postinfo.name}
                  </div> */}
                  <div className="navi mt-2  font-weight-bolder font-size-h3">
                    <a href="#" className="navi-item">
                      <span className="navi-link p-0 pb-2">
                        <span className="navi-text text-muted text-hover-primary">
                          {/*  {user.role}  */}
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="row d-flex justify-content-center"
                style={{ width: "100%" }}
              >
                {postinfo.map((el) => (
                  <div
                    className="btn btn-white mt-5"
                    style={{ width: "70%" }}
                    key={el.id}
                  >
                    <a
                      href={`${el.link}`}
                      className=" d-block "
                      target="_blank"
                    >
                      <div className="font-size-h6 font-weight-bolder text-left d-flex align-items-center">
                        {el.name === "karaf" ? (
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-100 mr-5">
                              <SVG
                                className="symbol-label"
                                src={toAbsoluteUrl(
                                  "/img/Apache_Karaf-Logo.wine.svg"
                                )}
                              />
                              <i className="symbol-badge bg-success" />
                            </div>
                            <span className="pt-3">{el.version} </span>
                          </div>
                        ) : el.name === "play" ? (
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-100 mr-5">
                              <SVG
                                className="symbol-label"
                                src={toAbsoluteUrl("/img/play.svg")}
                              />
                              <i className="symbol-badge bg-success" />
                            </div>
                            <span className="pt-3">{el.version} </span>
                          </div>
                        ) : el.name === "DB" ? (
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-100 mr-5">
                              <SVG
                                className="symbol-label"
                                src={toAbsoluteUrl("/img/database-6913514.svg")}
                              />
                              <i className="symbol-badge bg-success" />
                            </div>
                            <span className="pt-3">{el.version} </span>
                          </div>
                        ) : (
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-100 mr-5">
                              <SVG
                                className="symbol-label"
                                src={toAbsoluteUrl("/img/cube.svg")}
                              />
                              <i className="symbol-badge bg-success" />
                            </div>
                            <div className="d-block align-items-center">
                              <div className="pt-3"> name : {el.name} </div>
                              <div className="pt-3">version: {el.version} </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              <div
                className="row d-flex justify-content-center"
                style={{
                  backgroundColor: "#fff",
                  outlineColor: "#ECEEF4",
                  margin: "5px",
                  padding: "10px",
                  height: "30%",
                }}
              ></div>

              {/*end::Header*/}
            </div>
          </div>
          <div
            className="offcanvas-overlay"
            onClick={() => {
              props.hide(false);
            }}
          />
        </>
      ) : null}
    </>
  );
}

export default Profil;
