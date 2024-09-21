import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import "../../../public/sass/pages/slider.scss";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Imgzero from "../../../public/images/Ellipse.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import './styles.css';

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { FaBorderAll, FaLinesLeaning } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const Slider = () => {
  return (
    <>
      <div className="sswiper">
        <div className="nav_btn">
          <div className="left_btn">
          <IoIosArrowRoundBack />
          </div>
          <div className="right_btn">
          <IoIosArrowRoundForward />
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
      
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            320: {
              // width: 576,
              slidesPerView: 1,
            },
            576: {
              slidesPerView:2,
            },
            768: {
              // width: 768,
              slidesPerView: 3,
              spaceBetween:15
            },
          }}
          navigation={{
            prevEl: ".left_btn",
            nextEl: ".right_btn",
          }}
          centeredSlidesBounds={true}
        >
          <SwiperSlide>
            <div className="img_area">
              <Image src={Imgzero} height="auto" width="auto"></Image>
            </div>
            <div className="icon">
              <RiDoubleQuotesL />
            </div>
            <div className="spading">
              <p>
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <div className="rating">
              <div className="left">
                <h4>William Rog</h4>
              </div>
              <div className="right">
                <div className="icons">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h4>2 months ago</h4>
              </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img_area">
              <Image src={Imgzero} height="auto" width="auto"></Image>
            </div>
            <div className="icon">
              <RiDoubleQuotesL />
            </div>
            <div className="spading">
              <p>
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <div className="rating">
              <div className="left">
                <h4>Kames Roger</h4>
              </div>
              <div className="right">
                <div className="icons">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h4>2 months ago</h4>
              </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img_area">
              <Image src={Imgzero} height="auto" width="auto"></Image>
            </div>
            <div className="icon">
              <RiDoubleQuotesL />
            </div>
            <div className="spading">
              <p>
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <div className="rating">
              <div className="left">
                <h4>Mark Henry</h4>
              </div>
              <div className="right">
                <div className="icons">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h4>2 months ago</h4>
              </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img_area">
              <Image src={Imgzero} height="auto" width="auto"></Image>
            </div>
            <div className="icon">
              <RiDoubleQuotesL />
            </div>
            <div className="spading">
              <p>
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <div className="rating">
              <div className="left">
                <h4>Harry</h4>
              </div>
              <div className="right">
                <div className="icons">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h4>2 months ago</h4>
              </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img_area">
              <Image src={Imgzero} height="auto" width="auto"></Image>
            </div>
            <div className="icon">
              <RiDoubleQuotesL />
            </div>
            <div className="spading">
              <p>
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <div className="rating">
              <div className="left">
                <h4>Ritik</h4>
              </div>
              <div className="right">
                <div className="icons">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h4>2 months ago</h4>
              </div>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img_area">
              <Image src={Imgzero} height="auto" width="auto"></Image>
            </div>
            <div className="icon">
              <RiDoubleQuotesL />
            </div>
            <div className="spading">
              <p>
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <div className="rating">
              <div className="left">
                <h4>Tumpreet</h4>
              </div>
              <div className="right">
                <div className="icons">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h4>2 months ago</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
