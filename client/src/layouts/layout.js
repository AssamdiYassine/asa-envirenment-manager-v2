import React, { Component } from "react";
import SVG from "react-inlinesvg";
import { withRouter } from "react-router-dom";
import $ from "jquery";
import "assets/sass/pages/login/login-4.scss";
import { Aside } from "components/aside/Aside";
 import { HeaderMobile } from "components/header-mobile/HeaderMobile";
import { toAbsoluteUrl } from "helpers";
 
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  ;
  componentDidMount() {
    this.setState({ loading: false });
    $(document).on("click", "div.offcanvas-mobile-overlay", () => {
      console.log("in");
      $("#kt_profile_aside").removeClass("offcanvas-mobile-on");
      $("div.offcanvas-mobile-overlay").remove();
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      $("#kt_profile_aside").removeClass("offcanvas-mobile-on");
      $("div.offcanvas-mobile-overlay").remove();
    }
  }

  render() {
    const { loading } = this.state;
 
    if (loading) {
      return (
        <div id="splash-screen" className="kt-splash-screen">
          <SVG
            src={toAbsoluteUrl("/media/logos/mossahamati-logo-dark-full.svg")}
            alt="Mossahamati"
          />
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
      );
    }

    const { children} = this.props;

    return (
      <>
        {/*begin::Main*/}
        <HeaderMobile />
        <div className="d-flex flex-column flex-root">
          {/*begin::Page*/}
          <div className="d-flex flex-row flex-column-fluid page">
            {/* {width >= "980" ? (
              <div className={` asidewidth `}>
                <Aside t={t} />
              </div>
            ) : ( */}
              <Aside  />
            {/* )} */}

            {/*begin::Wrapper*/}
            <div
              className="d-flex flex-column flex-row-fluid wrapper"
              id="kt_wrapper"
            >
              {/*begin::Content*/}
              <div
                id="kt_content"
                className={`content d-flex flex-column flex-column-fluid pt-0 `}
              >
                {/* <AnimateLoading /> */}
                {/* {headerTitle && <SubHeader headerTitle={headerTitle} />} */}
                {children}
                {/*end::Entry*/}
              </div>
              {/*end::Content*/}
            
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Page*/}
        </div>
      </>
    );
  }
}

 
export default withRouter((Layout));
