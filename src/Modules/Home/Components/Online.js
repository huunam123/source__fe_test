"use strict";

/* Package System */
import React from "react";

/* Application */
class Online extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  getHomeBanner = () => {
    let _result = [];

    return _result;
  };

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <React.Fragment>
        <div className="online">
         
          <div className="row online-content">
          <div className="col-lg-6 col-md-6 col-sm-6 box">
            <img src="/images/smartphone.png" /> 
            </div>
          <div className="col-lg-6 col-md-6 col-sm-6  item-box">
          <div className="online-title">Tính năng nổi trội của Lawyer Network</div>
              <div className="item">
              
                <div className="logout">
                  <div className="logout-icon">
                  <img src="/images/Frame 8118.png" alt="" />

                  </div>
                  <div className="texxt">
                      <div className="logout-text">Chat AI</div>
                      <div className="content">Lorem ipsum dolor sit amet consectetur. Et quis euismod facilisi laoreet sed. Amet egestas velit.</div>
                  </div>
                </div>
                <div className="search">
                  <div className="search-icon">
                  <img src="/images/Frame 8118 (1).png" alt="" />

                  </div>
                  <div className="texxt">
                      <div className="search-text">Kho lưu trữ</div>
                      <div className="content">Lorem ipsum dolor sit amet consectetur. Et quis euismod facilisi laoreet sed. Amet egestas velit.</div>
                  </div>
                </div>
                <div className="result">
                  <div className="result-icon">
                  <img src="/images/Frame 8118 (2).png" alt="" />

                  </div>
                  <div className="texxt">
                  <div className="result-text">Chat với luật sư</div>
                  <div className="content">Lorem ipsum dolor sit amet consectetur. Et quis euismod facilisi laoreet sed. Amet egestas velit.</div>

                </div>
                </div>
                <div className="dl">
                <div className="badge-gg">
                  <a href="https://play.google.com/store/apps?hl=vi">
                    <img src="/images/gg.png" />
                  </a>
                </div>

                <div className="badge-app">
                <a href="https://www.apple.com/vn/app-store/">
                    <img src="/images/app.png" /> 
   
                </a>
                 
             
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

export default Online;
