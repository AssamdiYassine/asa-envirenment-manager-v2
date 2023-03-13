import React from "react";

function SubHeader(props) {
  const {setModalShow} = props;
  return (
    <div className="bg-white">
      <div id="kt_header" className="header header-fixed  ">
        <div className="container-fluid d-flex align-items-stretch justify-content-between">
          <div
            id="kt_header_menu_wrapper"
            className="  d-flex header-menu-wrapper header-menu-wrapper-left align-items-center"
          >
            <h4> Tout les platformes </h4>
          </div>

          <div className="d-flex">
            <div className="d-flex align-items-center p-1">
              <button
              onClick={()=>setModalShow(true)}
                type="button"
                className="btn btn-primary  text-white flex-nowrap text-nowrap ml-3"
              >
                Ajouter environment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
