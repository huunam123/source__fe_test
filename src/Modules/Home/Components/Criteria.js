"use strict";

/* Package System */
import React from "react";
/* Package style */

class Partner extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <React.Fragment>
        <div className="partners">
          <div className="text">
            <div className="partner-title">Tiêu chí phát triển ứng dụng </div>
            <div className="partner-titles">
              Fill out this simple form if you are interested in one or all our
              services but not sure what is the next step. Someone will contact
              you shortly to help with the next step.{" "}
            </div>
          </div>

          <div className="row components">
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="item">
                <img src="/images/Frame 8111.png" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="item">
                <img src="/images/Frame 8115.png" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="item">
                <img src="/images/Frame 8116.png" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="item">
                <img src="/images/Frame 8117.png" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Partner;
