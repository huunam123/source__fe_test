"use strict";

/* Package System */
import React from "react";
import Dashboard from "@modules/Home/Components/Dashboard";
import Activity from "@modules/Home/Components/Activity";
import Online from "@modules/Home/Components/Online";
import Partner from "@modules/Home/Components/Partner";
import Criteria from "@modules/Home/Components/Criteria";
import Form from "@modules/Home/Components/Form";

/* Package Application */

export default class extends React.Component {
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
        <section className="sl-section">
          <div className="container">
            <Dashboard />
          </div>

          <div className="container">
            <Online />
          </div>

          <div className="container">
            <Criteria />
          </div>

          <div className="container">
            <Activity />
          </div>

          <div className="container">
            <Form />
          </div>

          <div className="container">
            <Partner />
          </div>
        </section>
      </React.Fragment>
    );
  }
}
