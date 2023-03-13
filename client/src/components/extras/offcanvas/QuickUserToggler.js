/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { toAbsoluteUrl } from "helpers";

export function QuickUserToggler({ user, toggle_id }) {
  return (
    <>
      <OverlayTrigger
        placement="right"
        overlay={<Tooltip id={`tooltip-${toggle_id}`}>{user.firstname} {user.lastname}</Tooltip>}
      >
        <a
          className="btn btn-icon btn-clean btn-lg mb-1 position-relative"
          id={`kt_${toggle_id}_toggle`}
          data-placement="right"
          data-container="body"
          data-boundary="window"
        >
          <div className="symbol symbol-40">
            <div className="symbol-label" style={{
              backgroundImage: user.photo ? `url("${user.photo}")` : `url(${toAbsoluteUrl("/media/users/blank.png")})`
            }}>
            </div>
            <i className="symbol-badge bg-success"></i>
          </div>
        </a>
      </OverlayTrigger>
    </>
  );
}
