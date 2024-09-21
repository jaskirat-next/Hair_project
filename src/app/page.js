"use client";
import "../../public/sass/pages/homepage.scss";
import Image from "next/image";
import Imgzero from "../../public/images/image30.png";
import Imgone from "../../public/images/Vector.png";
import Imgtwo from "../../public/images/Black.png";
import Imgthree from "../../public/images/Black1.png";
import Imgfour from "../../public/images/Black2.png";
import Imgfive from "../../public/images/pngwing.png";
import Imgsix from "../../public/images/comb.jpg";
import Imgseven from "../../public/images/artihair2.jpg";
import Imgnine from "../../public/images/img5.jpg";
import Imgten from "../../public/images/frame5.png";
import Imgeleven from "../../public/images/design.png";
import Imgtweleve from "../../public/images/Frame225.jpg";
import Imgtwenty from "../../public/images/banner1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "animate.css";
import React, { useRef, useState } from "react";
import { IoIosArrowRoundForward, IoIosCall } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import './styles.css';

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { FaEnvelope, FaLinesLeaning, FaLocationDot } from "react-icons/fa6";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Slider from "./components/slider_swiper";
import { MdPermContactCalendar } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
// import { FaLinesLeaning } from "react-icons/fa6";

export default function Home() {
  const arr = [{ key: "" }, {}, {}];
  return (
    <>
      <section className="banner">
        <div className="swiper_slider">
          <Swiper
            // spaceBetween={30}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="container_img">
              <Container>
                <Row>
                  <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className="bb">
                      <div className="banner_content">
                        <h3>
                          Transform Your Locks with Our Big Hair Collection
                        </h3>
                        <p>
                          Forem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu
                        </p>
                        <div className="bbuttons">
                          <button type="button" className="btn1">
                            Shop Now
                          </button>
                          <button type="button" className="btn2">
                            Explore More
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="line_icon">
                      <FaLinesLeaning />
                    </div>
                  </Col>
                </Row>
              </Container>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container_img">
              <Container>
                <Row>
                  <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className="bb">
                      <div className="banner_content">
                        <h3>
                          Transform Your Locks with Our Big Hair Collection
                        </h3>
                        <p>
                          Forem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu
                        </p>
                        <div className="bbuttons">
                          <button type="button" className="btn1">
                            Shop Now
                          </button>
                          <button type="button" className="btn2">
                            Explore More
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="line_icon">
                      <FaLinesLeaning />
                    </div>
                  </Col>
                </Row>
              </Container>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container_img">
              <Container>
                <Row>
                  <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className="bb">
                      <div className="banner_content">
                        <h3>
                          Transform Your Locks with Our Big Hair Collection
                        </h3>
                        <p>
                          Forem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu
                        </p>
                        <div className="bbuttons">
                          <button type="button" className="btn1">
                            Shop Now
                          </button>
                          <button type="button" className="btn2">
                            Explore More
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="line_icon">
                      <FaLinesLeaning />
                    </div>
                  </Col>
                </Row>
              </Container>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="vec_area">
          <Image src={Imgone} height="auto" width="auto"></Image>
        </div>
      </section>
      <section className="slide_marquee">
        <div className="slider">
          <div className="sale_text">
            <span>SAVE 50% OFF</span> <span>SAVE 50% OFF</span>
            <span>SAVE 50% OFF</span> <span>SAVE 50% OFF</span>
            <span>SAVE 50% OFF</span> <span>SAVE 50% OFF</span>
            <span>SAVE 50% OFF</span> <span>SAVE 50% OFF</span>
            <span>SAVE 50% OFF</span> <span>SAVE 50% OFF</span>
            <span>SAVE 50% OFF</span> <span>SAVE 50% OFF</span>
            <span>SAVE 50% OFF</span> <span>SAVE 50% OFF</span>
            <span>SAVE 50% OFF</span> <span>SAVE 50% OFF</span>
            <span>SAVE 50% OFF</span> <span>SAVE 50% OFF</span>
            <span>SAVE 50% OFF</span> <span>SAVE 50% OFF</span>
            <span>SAVE 50% OFF</span> <span>SAVE 50% OFF</span>
            <span>SAVE 50% OFF</span> <span>SAVE 50% OFF</span>
            <span>SAVE 50% OFF</span> <span>SAVE 50% OFF</span>
            <span>SAVE 50% OFF</span> <span>SAVE 50% OFF</span>
            <span>SAVE 50% OFF</span> <span>SAVE 50% OFF</span>
            <span>SAVE 50% OFF</span> <span>SAVE 50% OFF</span>
          </div>
        </div>
      </section>
      <section className="our_products">
        <div className="img_area">
          <Image src={Imgtweleve} height="auto" width="auto"></Image>
        </div>
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <h3>
                OUR <span>PRODUCTS</span>
              </h3>

              {/* <div className="swiper_btn">
                <div className="next">
                  <IoIosArrowRoundBack />
                </div>
                <div className="prev">
                  {" "}
                  <IoIosArrowRoundForward />
                </div>
              </div> */}
              <div className="swiper_area">
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={3}
                  centeredSlides={true}
                  spaceBetween={30}
                  breakpoints={{
                    320: {
                      // width: 576,
                      slidesPerView: 1,
                    },
                    500: {
                      slidePerView: 3,
                      spaceBetween: 10,
                    },
                    // 650: {
                    //   slidePerView: 3,
                    // },
                    768: {
                      // width: 768,
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                  }}
                  loop={true}
                  navigation={{
                    prevEl: ".next",
                    nextEl: ".prev",
                  }}
                  centeredSlidesBounds={true}
                >
                  <SwiperSlide>
                    <div className="item_area">
                      <Image src={Imgfive} height="/" width="auto"></Image>
                    </div>
                    <h3>Artificial Hair</h3>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item_area">
                      <Image src={Imgsix} height="/" width="auto"></Image>
                    </div>
                    <h3>Comb</h3>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item_area">
                      <Image src={Imgseven} height="/" width="auto"></Image>
                    </div>
                    <h3>Juda</h3>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item_area">
                      <Image src={Imgnine} height="/" width="auto"></Image>
                    </div>
                    <h3>Hair Dryer</h3>
                  </SwiperSlide>
                  <div className="next">
                    <IoIosArrowRoundBack />
                  </div>
                  <div className="prev">
                    <IoIosArrowRoundForward />
                  </div>
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="delivery">
        <div className="parent">
          <Container>
            <Row>
              <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="inner_parent">
                  <h3>
                    EVERY THING DELIVERED<span> AT YOUR DOORSTEP</span>
                  </h3>
                  <Row>
                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                      <div className="card">
                        <div className="img_area">
                          <Image src={Imgtwo} height="/" width="/"></Image>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur elit
                          adipielitelitscing elit. Nunc. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit. adipiscing Nunc.
                        </p>
                      </div>
                    </Col>

                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                      <div className="card">
                        <div className="img_area">
                          <Image src={Imgthree} height="/" width="/"></Image>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur elit
                          adipielitelitscing elit. Nunc. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit. adipiscing Nunc.
                        </p>
                      </div>
                    </Col>

                    <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                      <div className="card">
                        <div className="img_area">
                          <Image src={Imgfour} height="/" width="/"></Image>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur elit
                          adipielitelitscing elit. Nunc. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit. adipiscing Nunc.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="feedbacks">
        <Container>
          <h3>
            CUSTOMERS <span>FEEDBACKS</span>
          </h3>
          <Slider />
        </Container>
      </section>

      <section className="intouch">
        <div className="design_area">
          <Image src={Imgeleven}></Image>
        </div>
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="content_area">
                <div className="frame_area">
                  <Image src={Imgten} height="auto" width="auto"></Image>
                </div>
                <div className="form_section">
                  <h3>Get in Touch</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit adipie
                    litelitscing elit litelitscing elit litelitscing elit.{" "}
                  </p>
                  <Form>
                    <Row>
                      <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Form.Group
                          className="form-group"
                          controlId="formBasicEmail"
                        >
                          <div className="icon">
                            <MdPermContactCalendar />
                          </div>
                          <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                      </Col>
                      <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Form.Group
                          className="form-group"
                          controlId="formBasicPassword"
                        >
                          <div className="icon">
                            <MdPermContactCalendar />
                          </div>
                          <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                      </Col>
                      <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Form.Group
                          className="form-group"
                          controlId="formBasicEmail"
                        >
                          <div className="icon">
                            <FaEnvelope />
                          </div>
                          <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                      </Col>
                      <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Form.Group
                          className="form-group"
                          controlId="formBasicEmail"
                        >
                          <div className="icon">
                            <IoIosCall />
                          </div>
                          <Form.Control type="tel" placeholder="Contact no." />
                        </Form.Group>
                      </Col>
                      <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Form.Group
                          className="form-group"
                          controlId="formBasicEmail"
                        >
                          <div className="icon">
                            <AiFillMessage />
                          </div>
                          <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: "61px" }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="right">
          <h3>Contact us</h3>
          <p>Lorem ipsum dolor sit amet, elit litelitscing elit. </p>
          <ul>
            <li>
              <Link href="/">
                <IoCall />
                <span>+1 784-5120-5431</span>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/">
                <FaEnvelope />
                <span>support@fitiehair.com</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaLocationDot />
                <span>
                  Lorem ipsum dolor sit amet, consectetur elit adipielit elit.
                  Nunc.
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
