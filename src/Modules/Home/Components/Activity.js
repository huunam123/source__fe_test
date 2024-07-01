"use strict";

/* Package System */
import React from "react";
class Activity extends React.Component {
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
        <div className="activity">
          <div className="activity-title">
            Cố vấn từ những chuyên gia đầu ngành
          </div>
          <div className="row activity-content">
            <div className="col-lg-4 col-md-6 col-sm-6 ">
              <div className="item">
                <img src="/images/Rectangle 18.png" alt="" />

                <div className="bu-text">
                  <div className="text-">Luật sư Trần Văn Dầu</div>
                  <div className="text--">
                    Scelerisque enim vestibulum sed egestas. Mauris volutpat
                    amet lorem vel velit neque. Eu est viverra libero at.
                    Integer nulla egestas semper elementum duis. Volutpat nisi
                    ipsum non luctus odio.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4  col-md-6 col-sm-6 ">
              <div className="item">
                <img src="/images/Rectangle 10.png" alt="1" />

                <div className="bu-text">
                  <div className="text-">Luật sư Hoàng Thương Hà</div>
                  <div className="text--">
                    Scelerisque enim vestibulum sed egestas. Mauris volutpat
                    amet lorem vel velit neque. Eu est viverra libero at.
                    Integer nulla egestas semper elementum duis. Volutpat nisi
                    ipsum non luctus odio.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6  ">
              <div className="item">
                <img src="/images/Rectangle 17.png" alt="1" />

                <div className="bu-text">
                  <div className="text-">Luật sư Trần Viết Hà</div>
                  <div className="text--">
                    Scelerisque enim vestibulum sed egestas. Mauris volutpat
                    amet lorem vel velit neque. Eu est viverra libero at.
                    Integer nulla egestas semper elementum duis. Volutpat nisi
                    ipsum non luctus odio.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Activity;
