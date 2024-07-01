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
        <div className="partner">
          <div className="partner-title">Đối tác của chúng tôi </div>

          <div className="row component">
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="item">
                <img src="/images/Group 7070.png" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="item">
                <img src="/images/Group 7071.png" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="item">
                <img src="/images/Group 7072.png" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="item">
                <img src="/images/Group 7073.png" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Partner;
