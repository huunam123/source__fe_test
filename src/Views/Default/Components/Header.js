"use strict";

import React from "react";
import Action from "@libs/Action";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar id="nl-header">
          <div id="nl-headerr__mastehead">
            <div className="d-flex-">
              <div className="menu">
                <div className="doctor-text">
                  <div className="group-doctor">
                    <img src="/images/loohe.png" />
                  </div>
                </div>

                <div className="language">
                  <div className="button-">
                    <div className="button-base">
                      <div className="text-v">VN</div>
                      <div className="text-">/</div>
                      <div className="text-e">EN</div>
                    </div>
                  </div>
                  <div className="language-call">
                    <div className="call-text">Call Us Now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default Header;
