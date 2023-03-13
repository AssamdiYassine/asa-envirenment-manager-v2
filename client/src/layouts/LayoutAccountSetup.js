import React, { Component } from "react";
import SVG from "react-inlinesvg";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "assets/sass/pages/login/login-4.scss";
import { toAbsoluteUrl } from "helpers";

class LayoutAccountSetup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.setState({loading: false});
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <div id="splash-screen" className="kt-splash-screen">
          <img src="/media/logos/logo-dark.png" alt="Mossahamati" />
          <svg className="splash-spinner" viewBox="0 0 50 50">
            <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="5"
            ></circle>
          </svg>
        </div>
      )
    }

    const { children, bg, svg, showLogo } = this.props;
    return (
      <>
        <div className="d-flex flex-column flex-root">
          {/*begin::Login*/}
          <div className="login login-4 wizard d-flex flex-column flex-lg-row flex-column-fluid wizard bg-white" id="kt_accountSetup">
            {/*begin::Content*/}
            <div className="d-block justify-content-center flex-row flex-row-fluid bg-white pt-10"  style={{alignSelf: "center"}}>
              {/*begin::Container*/}
              {/* <div className="login-content login-content-signup d-flex flex-column"> */}
                {/*begin::Aside Top*/}
                {/* <div className="d-flex flex-column-auto flex-column px-10"> */}
                  {/*begin: SubContent*/}
                  {children}
                  {/*end: SubContent*/}
                {/* </div> */}
                {/*end::Aside Top*/}
              {/* </div> */}
              {/*end::Container*/}
            </div>
            {/*begin::Content*/}
            {/* begin::Aside */}
            <div
              // backup class flex-row-auto remove later
              className="login-aside order-1 order-lg-2 d-flex flex-column"
              style={{
                background: `${bg}`,
              }}
            >
              {/*begin::Aside Top*/}
              {/* <div className="d-none flex-column-auto d-lg-flex justify-content-between"> */}
              {showLogo && (
                <div className="d-none d-lg-block d-xl-block">
                  <div className="d-flex flex-column-auto flex-column py-lg-20 py-10" >
                    {/*begin::Aside Logo*/}
                    {/* <div className="text-center mb-10"> */}
                    <div className="text-center">
                      {/* <img alt="Auth" className={`max-h-100px`} src={toAbsoluteUrl("/media/logos/chronos-logo-black.png")} /> */}
                      <SVG className="max-h-100px h-85px" src={toAbsoluteUrl("/media/logos/mossahamati-logo-dark.svg")} />
                    </div>
                  </div>
                </div>
              )}
              {/*end::Aside Top*/}
              {/*begin::Aside Bottom*/}
              <div
                className={`aside-img d-flex flex-row-fluid bgi-no-repeat ${svg.indexOf("people.svg") >= 0 ? "bgi-position-y-top" : "bgi-position-y-center"} bgi-position-y-top bgi-position-x-center`}
                style={{
                  backgroundImage: `url('${toAbsoluteUrl(svg)}')`,
                }}
              />
              {/*end::Aside Bottom*/}
            </div>
            {/* end::Aside */}
            
          </div>
          {/*end::Login*/}
        </div>
      </>
    );
  }
}

export default withRouter(connect(null, { })(LayoutAccountSetup));
