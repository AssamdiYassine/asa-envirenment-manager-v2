import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { LayoutInit } from "components/LayoutInit";
import { HeaderMobile } from "components/header-mobile/HeaderMobile";
import { Aside } from "components/aside/Aside";
import { Footer } from "components/footer/Footer";
import SubHeader from "components/subheader/SubHeader";
import QuickUser from "components/extras/offcanvas/QuickUser";
import { QuickNotification } from 'components/extras/offcanvas/QuickNotification';
import { default as AnimateLoading } from "components/controls/AnimateLoading";

class LayoutPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div id="splash-screen" className="kt-splash-screen">
          <img src="/media/logos/logo-dark.png" alt="Chronos" />
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
    const { children, headerTitle } = this.props;
    return (
      <>
        {/*begin::Main*/}
        <HeaderMobile />
        <div className="d-flex flex-column flex-root">
          {/*begin::Page*/}
          <div className="d-flex flex-row flex-column-fluid page">
            <Aside />

            {/*begin::Wrapper*/}
            <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
              {/*begin::Content*/}
              <div id="kt_content" className={`content d-flex flex-column flex-column-fluid`}>
                <AnimateLoading />
                {headerTitle && <SubHeader headerTitle={headerTitle} />}

                {/*begin::Entry*/}
                <div className="d-flex flex-column-fluid">
                  {/*begin::Container*/}
                  <div className="container">{children}</div>
                  {/*end::Container*/}
                </div>

                {/*end::Entry*/}
              </div>
              {/*end::Content*/}
              <Footer />
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Page*/}
        </div>
        <QuickNotification />
        <QuickUser />
        {/* <ScrollTop /> */}
        {/*end::Main*/}
        <LayoutInit />
      </>
    );
  }
}

export default withRouter(connect(null, {})(LayoutPages));
