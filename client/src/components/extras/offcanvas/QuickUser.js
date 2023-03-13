/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,no-undef */
import React from "react";
import SVG from "react-inlinesvg";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import $ from 'jquery'

import { pushUserData } from "../../../../../app/actions";
import { toAbsoluteUrl } from "helpers";

function QuickUser({ pushUserData}) {

  const history = useHistory();

  const logoutClick = () => {
    $(".offcanvas-overlay").remove();
    history.push('/auth/login');
    localStorage.removeItem('TOKEN');
    pushUserData({user: null, token: null});
  };

  return (
    <div id="kt_quick_user" className="offcanvas offcanvas-left offcanvas p-10">
      <div className="offcanvas-header d-flex align-items-center justify-content-between pb-5">
        <h3 className="font-weight-bold m-0">
          Profil
        </h3>
        <a
          href="#"
          className="btn btn-xs btn-icon btn-light btn-hover-primary"
          id="kt_quick_user_close"
        >
          <i className="ki ki-close icon-xs text-muted" />
        </a>
      </div>

      <div className="offcanvas-content pr-5 mr-n5">
        <div className="d-flex align-items-center mt-5">
          <div className="col-4 symbol symbol-100 mr-5">
            <div
              className="symbol-label"
              style={{
                backgroundImage: user.photo ? `url("${user.photo}")` : `url(${toAbsoluteUrl("/media/users/blank.png")})`,
              }}
            />
            <i className="symbol-badge bg-success" />
          </div>
          <div className="col-8 d-flex flex-column">
            <a
              href="/management-space"
              className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary"
            >
              {user.firstname} {user.lastname}
            </a>
            {/* <div className="text-muted mt-1">{user.societe.activite.name}</div> */}
            <div className="navi mt-2">
              <a href="#/management-space" className="navi-item">
                <span className="navi-link p-0 pb-2">
                  <span className="navi-icon mr-1">
                    <span className="svg-icon-lg svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Mail-notification.svg"
                        )}
                      ></SVG>
                    </span>
                  </span>
                  <span className="long-text navi-text text-muted text-hover-primary">
                    {user.email}
                  </span>
                </span>
              </a>
            </div>
            <button
              className="btn btn-light btn-bold"
              onClick={logoutClick}
            >
              Se déconnecter
            </button>
          </div>
        </div>

        <div className="separator separator-dashed mt-8 mb-5" />

        <div className="navi navi-spacer-x-0 p-0">
          <a href="/management-space" className="navi-item">
            <div className="navi-link">
              <div className="symbol symbol-40 bg-light mr-3">
                <div className="symbol-label">
                  <span className="svg-icon svg-icon-md svg-icon-primary">
                    <SVG
                      src={toAbsoluteUrl(
                        "/media/svg/icons/General/Settings-1.svg"
                      )}
                    ></SVG>
                  </span>
                </div>
              </div>
              <div className="navi-text">
                <div className="font-weight-bold">Paramètres</div>
                <div className="text-muted">
                  Remplir ou modifier vos données
                </div>
              </div>
            </div>
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default connect(null, { pushUserData })(injectIntl(QuickUser));

