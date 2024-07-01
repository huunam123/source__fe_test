"use strict";

/* Package System */
import React from "react";
/* Package style */

class Dashboard extends React.Component {
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
        <div className="row componentt">
          <div className="col-lg-3 col-md-6 col-sm-6 item-box">
            <div className="item1">
              <img src="/images/downn.png" alt="" />

              <div className="dowl1">
                <div className="dow-view">2,500</div>
                <div className="dow-turn">Lượt tải về</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 item-box">
            <div className="item">
              <img src="/images/Frame 8085.png" alt="" />

              <div className="dowl2">
                <div className="dow-view">15M</div>
                <div className="dow-turn">Dữ liệu câu hỏi về Luật</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 item-box">
            <div className="item">
              <img src="/images/Frame 8092.png" alt="" />

              <div className="dowl3">
                <div className="dow-view">809</div>
                <div className="dow-turn">Đánh giá 5 sao</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 item-box">
            <div className="item4">
              <img src="/images/Frame 8107 (1).png" alt="" />

              <div className="dowl4">
                <div className="dow-view">1,265</div>
                <div className="dow-turn">
                  Lượt truy cập, gửi câu hỏi hàng ngày
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line">
          <img src="/images/Line 1.png" />
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
