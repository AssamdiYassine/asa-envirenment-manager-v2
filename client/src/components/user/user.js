import React, { useState as UseState } from 'react'
import Profil from 'components/profil/profil';

function user(props) {
    const { t } = props;
    const [show, setShow] = UseState(false);

    const hide = (bool) => {
      setShow(bool);
    };
  
  return (
    <div><div className="d-flex my-auto">
    <div
      className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2 ml-3 my-auto"
      onClick={() => {
          setShow(true);
      }}
    >
      <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">
        Bonjour,
      </span>
      <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">
      {props.user?.infos?.user_infos?.firstname?.toUpperCase()}
      </span>
      <span className="symbol symbol-35 symbol-light-primary ml-3">
        <span className="symbol-label font-size-h5 font-weight-bold text-uppercase">
        {props.user?.infos?.user_infos?.firstname[0]?.toUpperCase()}
        </span>
      </span>
    </div>
  </div>
  {show && <Profil show={show} hide={hide} />}</div>
  )
}


export default user
 