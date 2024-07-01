"use strict";

/* Package System */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper/core';
import "swiper/swiper-bundle.min.css";
import 'swiper/swiper.min.css';

class Banner extends React.Component {
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
    SwiperCore.use([Pagination]);
    return (
      <React.Fragment>
        <section className="banner">
          <div className="container">
            <div className="banner-content">

              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{ clickable: true }} >

                  <SwiperSlide>
                    {" "}
                    <div className="banner-">
                      <div className="banner-text">
                        <div className="text">Công cụ hỗ trợ pháp luật</div>
                        <div className="contents">
                          <div className="textt-">ỨNG DỤNG TƯ VẤN LUẬT PHÁP</div>
                          <div className="text-content">LAWYER NETWORK</div>
                        </div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur. Rhoncus in
                          feugiat ipsum varius et pellentesque turpis scelerisque
                          nibh. Semper sit ornare ornare libero. Tellus tortor
                          fusce tincidunt posuere metus sapien mattis cursus sed.
                        </div>
                        <div className="text-contents">
                          <div className="content-s">
                            <a href="#">Liên hệ ngay</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    {" "}
                    <div className="banner-">
                      <div className="banner-text">
                        <div className="text">Công cụ hỗ trợ pháp luật</div>
                        <div className="contents">
                          <div className="textt-">ỨNG DỤNG TƯ VẤN LUẬT PHÁP</div>
                          <div className="text-content">LAWYER NETWORK</div>
                        </div>
                        <div className="content">
                          Lorem ipsum dolor sit amet consectetur. Rhoncus in
                          feugiat ipsum varius et pellentesque turpis scelerisque
                          nibh. Semper sit ornare ornare libero. Tellus tortor
                          fusce tincidunt posuere metus sapien mattis cursus sed.
                        </div>
                        <div className="text-contents">
                          <div className="content-s">
                            <a href="#">Liên hệ ngay</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                      {" "}
                      <div className="banner-">
                        <div className="banner-text">
                          <div className="text">Công cụ hỗ trợ pháp luật</div>
                          <div className="contents">
                            <div className="textt-">ỨNG DỤNG TƯ VẤN LUẬT PHÁP</div>
                            <div className="text-content">LAWYER NETWORK</div>
                          </div>
                          <div className="content">
                            Lorem ipsum dolor sit amet consectetur. Rhoncus in
                            feugiat ipsum varius et pellentesque turpis scelerisque
                            nibh. Semper sit ornare ornare libero. Tellus tortor
                            fusce tincidunt posuere metus sapien mattis cursus sed.
                          </div>
                          <div className="text-contents">
                            <div className="content-s">
                              <a href="#">Liên hệ ngay</a>
                            </div>
                          </div>
                        </div>
                      </div>
                  </SwiperSlide>
              </Swiper>


              {/* <div className="banner-">
              <div className="banner-text">
                  <div className="text">Công cụ hỗ trợ pháp luật</div>
                  <div className="contents">
                    <div className="textt-">ỨNG DỤNG TƯ VẤN LUẬT PHÁP</div>
                    <div className="text-content">LAWYER NETWORK</div>
                  </div>
                  <div className="content">
                    Lorem ipsum dolor sit amet consectetur. Rhoncus in feugiat
                    ipsum varius et pellentesque turpis scelerisque nibh. Semper
                    sit ornare ornare libero. Tellus tortor fusce tincidunt
                    posuere metus sapien mattis cursus sed.
                  </div>
                  <div className="text-contents">
                    <div className="content-s"><a href="#">Liên hệ ngay</a></div>
                  </div>
                </div>
              </div> */}

              <div className="banner-right">
                <img src="/images/Layer.png" />
              </div>
            </div>
          </div>

          <div className="backgr">
            <div className="ig">
              <img src="/images/loban.png" />
            </div>
            <div className="conten">
              <div className="text">
                Lorem ipsum dolor sit amet consectetur. Volutpat nibh adipiscing
                enim dui ac velit consequat. Pulvinar feugiat amet sapien
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
        </section>
      </React.Fragment>
    );
  }
}

export default Banner;
