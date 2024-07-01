"use strict";

/* Package System */
import React from "react";
// import BackToTop from "@views/Default/Components/BackToTop";
// import Fab from "@mui/material/Fab";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <footer id="nl-footer">
          <div className="nl-footer__top">
            <div className="bg">
              <div className="container">
                <div className="group">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="50" cy="50" r="50" fill="white" />
                    <path
                      d="M47.3973 26.2363C47.1453 26.0984 46.8626 26.0261 46.5753 26.0261C46.2881 26.0261 46.0054 26.0984 45.7534 26.2363L28.4247 35.6883C27.7329 36.065 27.1678 36.6027 26.7569 37.2397L46.5753 48.0479L66.3938 37.2397C65.9767 36.5919 65.4031 36.0595 64.726 35.6918L47.3973 26.2329V26.2363ZM26.0274 56.8493V40.7431L45.7534 51.5034C46.0054 51.6413 46.2881 51.7136 46.5753 51.7136C46.8626 51.7136 47.1453 51.6413 47.3973 51.5034L67.1233 40.7431V56.8493C67.1233 58.6658 66.4017 60.408 65.1172 61.6925C63.8327 62.977 62.0905 63.6986 60.274 63.6986H32.8767C31.0602 63.6986 29.318 62.977 28.0335 61.6925C26.749 60.408 26.0274 58.6658 26.0274 56.8493ZM33.7945 67.1233C34.3957 68.1645 35.2603 69.0291 36.3015 69.6302C37.3427 70.2314 38.5238 70.5479 39.726 70.5479H60.274C63.9071 70.5479 67.3914 69.1047 69.9604 66.5357C72.5294 63.9667 73.9726 60.4824 73.9726 56.8493V43.1507C73.9726 41.9484 73.6561 40.7673 73.0549 39.7261C72.4538 38.6849 71.5891 37.8203 70.5479 37.2192V56.8493C70.5479 59.5741 69.4655 62.1873 67.5388 64.1141C65.612 66.0408 62.9988 67.1233 60.274 67.1233H33.7945Z"
                      fill="#0A377F"
                    />
                  </svg>

                  <div className="group-text">
                    Đăng ký để nhận thông báo mới nhất từ chúng tôi!
                  </div>

                  <div class="group-import">
                    <div className="group-re">
                    <button class="re">Đăng ký</button>
                    </div>

                    <div className="email">
                      <div className="email-text">
                      <input 
                      type="email"
                      placeholder=" Nhập địa chỉ E-mail của bạn"/>

                      </div>

                    </div>
                  </div>

     </div>
     </div>
            </div>
          </div>

          <div className="nl-footer__middle">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <div className="ctn">
                    <div className="ctn-logo">
                      <img src="/images/logo lawyer.png" />
                    </div>

                    <div className="ctn-text">
                      Lorem ipsum dolor sit amet consectetur. Et purus sapien
                      sit at in. Amet leo eget malesuada vel laoreet viverra.
                      Justo scelerisque id in egestas. Ullamcorper eu urna amet
                      potenti ut suspendisse eget elit. Feugiat arcu sagittis et
                      dignissim. Sit fringilla tellus bibendum eu nisi.
                      Tincidunt lorem ullamcorper id egestas pretium congue
                      neque. Viverra pretium at neque enim convallis nunc vel
                      nullam. Ut.
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="row">
                    <div className="col-md-12">
                      {/* <dt>BỆNH VIỆN ĐA KHOA XANH PÔN</dt> */}
                      <dd>9999 Bellaire Blvd Ste 8B1 Houston, TX 77036</dd>
                      <div className="text-tel">
                        <a href="tel:+18328668866">+1 832-866-8866</a>
                      </div>
                      <div className="text-lh">
                        <a href="support@lawyernetwork.com">support@lawyernetwork.com</a>
                      </div>
                    </div>

                    <div className="social">
                      <a href="#">
                        <img src="/images/face (1).png" />
                      </a>
                      <a href="#">
                        <img src="/images/face (4).png" />
                      </a>
                      <a href="#">
                        <img src="/images/face (3).png" />
                      </a>
                      <a href="#">
                        <img src="/images/face (2).png" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="nl-footer__bottom">
            <div className="container--">
              <div className="text-center">
                Copyright © 2024 Lawyer Network, All Rights Reserved
              </div>
            </div>
          </div>
        </footer>

        {/* <BackToTop {...this.props}> */}
        {/* <Fab
            color="secondary"
            size="small"
            aria-label="scroll back to top"
            onClick={this.handleScrollTop}
          >
            <i className="fas fa-angle-up"></i>
          </Fab> */}
        {/* </BackToTop> */}
      </>
    );
  }
}

export default Footer;
