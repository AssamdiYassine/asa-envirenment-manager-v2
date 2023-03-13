/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "helpers";

export function QuickNotification({ title, icon, toggle_id, notifcation }) {
  return (
    <div id="kt_quick_panel" className="offcanvas offcanvas-left offcanvas p-10">
      <div className="offcanvas-header d-flex align-items-center justify-content-between pb-5">
        <h3 className="font-weight-bold m-0">
          Notifications
          <small className="text-muted font-size-sm ml-2">12 Notifications</small>
        </h3>
        <a
          href="#"
          className="btn btn-xs btn-icon btn-light btn-hover-primary"
          id="kt_quick_panel_close"
        >
          <i className="ki ki-close icon-xs text-muted" />
        </a>
      </div>

      <div className="offcanvas-content pr-5 mr-n5"></div>
      <div>
        <div className="d-flex align-items-center bg-light-warning rounded p-5 gutter-b">
          <span className="svg-icon svg-icon-warning mr-5">
            <SVG
              src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}
              className="svg-icon svg-icon-lg"
            ></SVG>
          </span>

          <div className="d-flex flex-column flex-grow-1 mr-2">
            <a
              href="#"
              className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
            >
              Another purpose persuade
            </a>
            <span className="text-muted font-size-sm">Due in 2 Days</span>
          </div>

          <span className="font-weight-bolder text-warning py-1 font-size-lg">
            +28%
          </span>
        </div>

        <div className="d-flex align-items-center bg-light-success rounded p-5 gutter-b">
          <span className="svg-icon svg-icon-success mr-5">
            <SVG
              src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
              className="svg-icon svg-icon-lg"
            ></SVG>
          </span>
          <div className="d-flex flex-column flex-grow-1 mr-2">
            <a
              href="#"
              className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
            >
              Would be to people
            </a>
            <span className="text-muted font-size-sm">Due in 2 Days</span>
          </div>

          <span className="font-weight-bolder text-success py-1 font-size-lg">
            +50%
          </span>
        </div>

        <div className="d-flex align-items-center bg-light-danger rounded p-5 gutter-b">
          <span className="svg-icon svg-icon-danger mr-5">
            <SVG
              src={toAbsoluteUrl(
                "/media/svg/icons/Communication/Group-chat.svg"
              )}
              className="svg-icon svg-icon-lg"
            ></SVG>
          </span>
          <div className="d-flex flex-column flex-grow-1 mr-2">
            <a
              href="#"
              className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1"
            >
              Purpose would be to persuade
            </a>
            <span className="text-muted font-size-sm">Due in 2 Days</span>
          </div>

          <span className="font-weight-bolder text-danger py-1 font-size-lg">
            -27%
          </span>
        </div>

        <div className="d-flex align-items-center bg-light-info rounded p-5">
          <span className="svg-icon svg-icon-info mr-5">
            <SVG
              src={toAbsoluteUrl("/media/svg/icons/General/Attachment2.svg")}
              className="svg-icon svg-icon-lg"
            ></SVG>
          </span>

          <div className="d-flex flex-column flex-grow-1 mr-2">
            <a
              href="#"
              className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1"
            >
              The best product
            </a>
            <span className="text-muted font-size-sm">Due in 2 Days</span>
          </div>

          <span className="font-weight-bolder text-info py-1 font-size-lg">
            +8%
          </span>
        </div>
      </div>
    </div>
  );
}
