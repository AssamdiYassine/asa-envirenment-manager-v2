/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "helpers";

export function QuickNotificationToggler({ title, icon, notification, toggle_id }) {
  return (
    <>
      <OverlayTrigger
        placement="right"
        overlay={<Tooltip id={`tooltip-${toggle_id}`}>{title}</Tooltip>}
      >
        <a
          className="btn btn-icon btn-lg mb-3 position-relative"
          id={`kt_${toggle_id}_toggle`}
          data-placement="right"
          data-container="body"
          data-boundary="window"
        >
          <span className="svg-icon svg-icon-lg">
            <SVG src={toAbsoluteUrl(icon)} />
          </span>
          {notification && (
            <span className="label label-sm label-light-success label-rounded font-weight-bolder position-absolute top-0 right-0 mt-1 mr-1">
              {notification}
            </span>
          )}
        </a>
      </OverlayTrigger>
    </>
  );
}
