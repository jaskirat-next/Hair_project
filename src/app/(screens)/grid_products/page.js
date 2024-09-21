"use client";

import Image from "next/image";
import { Col, Container, Row, Form, Dropdown } from "react-bootstrap";
import imgg from "../../../../public/images/rectangle.png";
import imgg2 from "../../../../public/images/banner.jpg";
import imgg3 from "../../../../public/images/banner3.jpg";
import imgg4 from "../../../../public/images/banner3.jpg";
import Imgzero from "../../../../public/images/hair3.png";
import Imgone from "../../../../public/images/hair4.png";
import Imgtwo from "../../../../public/images/hair5.png";
import Imgthree from "../../../../public/images/hair.png";
import "../../../../public/sass/pages/grid_product.scss";
import { MdViewList } from "react-icons/md";
import { IoGrid } from "react-icons/io5";
import { CiCircleRemove, CiHeart } from "react-icons/ci";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Filter from "@/app/components/filter";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

function grid() {
  const [showfilter, setShowfilter] = useState(false);
  const router= useRouter()
  return (
    <>
      <section className="rectangle">
        {/* <div className="img_area">
          <Image src={imgg} alt="/"></Image>
        </div> */}
        <div className="swiper_slider">
          <Swiper
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="item">
                <div className="item_image">
                  <Image src={imgg} alt="/" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="item_image">
                  <Image src={imgg2} alt="/" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="item_image">
                  <Image src={imgg3} alt="/" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="item_image">
                  <Image src={imgg4} alt="/" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="content">
          <h3>Products</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
          </p>
        </div>
      </section>
      <section>
        <div className="sec_3">
          <div className="parent">
            <Container>
              <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                  <div className="total">
                    <div className="tnumber">
                      <h3>
                        Total number of Products(<span>9</span>)
                      </h3>
                    </div>
                    <div className="page">
                      <Form>
                        <span>page</span>
                        <Form.Select aria-label="Default select example">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="3">4</option>
                          <option value="3">5</option>
                          <option value="3">6</option>
                          <option value="3">7</option>
                          <option value="3">8</option>
                          <option value="3">9</option>
                          <option value="3">10</option>
                        </Form.Select>
                        <span>of 10</span>
                      </Form>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>

      <section className="sec_4">
        <div className="parent">
          <Container>
            <Row>
              <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="inner_parent">
                  <div className="upper">
                    <div className="sort_by">
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Sort by: Product Title (A-Z)
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Product Category (A-Z)
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Product Category (Z-A)
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Product Title (A-Z)
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Product Title (Z-A)
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Product Price (Low-High)
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Product Price (High-Low)
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="view">
                      <ul>
                        <li >
                          <IoGrid />
                        </li>
                        <li onClick={()=>{router.push("/list_products")}}>
                          <MdViewList />
                        </li>
                        <li onClick={()=>{setShowfilter(!showfilter)}}>Filter</li>
                      </ul>
                    </div>
                  </div>
                  <div className="list">
                    <ul>
                      <li>
                        In Stock{" "}
                        <Link href="/">
                          <CiCircleRemove />
                        </Link>
                      </li>
                      <li>
                        Min. $60 - $600{" "}
                        <Link href="/">
                          <CiCircleRemove />
                        </Link>
                      </li>
                      <li>
                        On Sale{" "}
                        <Link href="/">
                          <CiCircleRemove />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="grid">
        <div className="parent">
          <Container>
            <Row>
              <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="inner_parent">
                  <Row>
                    <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                      <div className="cart">
                        <div className="icon">
                          <CiHeart />
                        </div>
                        <div className="stripe">ON SALE</div>
                        <div className="img_area">
                          <Image src={Imgzero} alt="/"></Image>
                        </div>
                        <div className="content">
                          <div className="hproduct">Hair Product</div>
                          <h3>Messy Juda Bun Extension Brown</h3>
                          <p>
                            Lorem ipsum dolor sit ame ipsum dol siet amet orem
                            ipsum dolor sit ame.
                          </p>
                          <div className="last">
                            <div className="stock">In Stock</div>
                            <div className="price">
                              <h4>$ 200</h4>
                              <h3>$ 150</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                      <div className="cart">
                        <div className="icon">
                          <CiHeart />
                        </div>
                        <div className="stripe">ON SALE</div>
                        <div className="img_area">
                          <Image src={Imgone} alt="/"></Image>
                        </div>
                        <div className="content">
                          <div className="hproduct">Hair Product</div>
                          <h3>Messy Juda Bun Extension Brown</h3>
                          <p>
                            Lorem ipsum dolor sit ame ipsum dol siet amet orem
                            ipsum dolor sit ame.
                          </p>
                          <div className="last">
                            <div className="stock">In Stock</div>
                            <div className="price">
                              <h4>$ 200</h4>
                              <h3>$ 150</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                      <div className="cart">
                        <div className="icon">
                          <CiHeart />
                        </div>
                        <div className="stripe">ON SALE</div>
                        <div className="img_area">
                          <Image src={Imgtwo} alt="/"></Image>
                        </div>
                        <div className="content">
                          <div className="hproduct">Hair Product</div>
                          <h3>Messy Juda Bun Extension Brown</h3>
                          <p>
                            Lorem ipsum dolor sit ame ipsum dol siet amet orem
                            ipsum dolor sit ame.
                          </p>
                          <div className="last">
                            <div className="stock">In Stock</div>
                            <div className="price">
                              <h4>$ 200</h4>
                              <h3>$ 150</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                      <div className="cart">
                        <div className="icon">
                          <CiHeart />
                        </div>
                        <div className="img_area">
                          <Image src={Imgone} alt="/"></Image>
                        </div>
                        <div className="content">
                          <div className="hproduct">Hair Product</div>
                          <h3>Messy Juda Bun Extension Brown</h3>
                          <p>
                            Lorem ipsum dolor sit ame ipsum dol siet amet orem
                            ipsum dolor sit ame.
                          </p>
                          <div className="last">
                            <div className="stock">In Stock</div>
                            <div className="price">
                              <h4>$ 200</h4>
                              <h3>$ 150</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                      <div className="cart">
                        <div className="icon">
                          <CiHeart />
                        </div>
                        <div className="stripe">ON SALE</div>
                        <div className="img_area">
                          <Image src={Imgzero} alt="/"></Image>
                        </div>
                        <div className="content">
                          <div className="hproduct">Hair Product</div>
                          <h3>Messy Juda Bun Extension Brown</h3>
                          <p>
                            Lorem ipsum dolor sit ame ipsum dol siet amet orem
                            ipsum dolor sit ame.
                          </p>
                          <div className="last">
                            <div className="stock">In Stock</div>
                            <div className="price">
                              <h4>$ 200</h4>
                              <h3>$ 150</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                      <div className="cart">
                        <div className="icon">
                          <CiHeart />
                        </div>
                        <div className="stripe">ON SALE</div>
                        <div className="img_area">
                          <Image src={Imgtwo} alt="/"></Image>
                        </div>
                        <div className="content">
                          <div className="hproduct">Hair Product</div>
                          <h3>Messy Juda Bun Extension Brown</h3>
                          <p>
                            Lorem ipsum dolor sit ame ipsum dol siet amet orem
                            ipsum dolor sit ame.
                          </p>
                          <div className="last">
                            <div className="stock">In Stock</div>
                            <div className="price">
                              <h4>$ 200</h4>
                              <h3>$ 150</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                      <div className="cart">
                        <div className="icon">
                          <CiHeart />
                        </div>
                        <div className="stripe">ON SALE</div>
                        <div className="img_area">
                          <Image src={Imgtwo} alt="/"></Image>
                        </div>
                        <div className="content">
                          <div className="hproduct">Hair Product</div>
                          <h3>Messy Juda Bun Extension Brown</h3>
                          <p>
                            Lorem ipsum dolor sit ame ipsum dol siet amet orem
                            ipsum dolor sit ame.
                          </p>
                          <div className="last">
                            <div className="stock">In Stock</div>
                            <div className="price">
                              <h4>$ 200</h4>
                              <h3>$ 150</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                      <div className="cart">
                        <div className="icon">
                          <CiHeart />
                        </div>
                        <div className="stripe">ON SALE</div>
                        <div className="img_area">
                          <Image src={Imgthree} alt="/"></Image>
                        </div>
                        <div className="content">
                          <div className="hproduct">Hair Product</div>
                          <h3>Messy Juda Bun Extension Brown</h3>
                          <p>
                            Lorem ipsum dolor sit ame ipsum dol siet amet orem
                            ipsum dolor sit ame.
                          </p>
                          <div className="last">
                            <div className="stock">In Stock</div>
                            <div className="price">
                              <h4>$ 200</h4>
                              <h3>$ 150</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                      <div className="cart">
                        <div className="icon">
                          <CiHeart />
                        </div>
                        <div className="img_area">
                          <Image src={Imgzero} alt="/"></Image>
                        </div>
                        <div className="content">
                          <div className="hproduct">Hair Product</div>
                          <h3>Messy Juda Bun Extension Brown</h3>
                          <p>
                            Lorem ipsum dolor sit ame ipsum dol siet amet orem
                            ipsum dolor sit ame.
                          </p>
                          <div className="last">
                            <div className="stock">In Stock</div>
                            <div className="price">
                              <h4>$ 200</h4>
                              <h3>$ 150</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
          {(showfilter && <Filter />)}
          <div className="right" onClick={()=>{!setShowfilter(false)}}>
          <FaArrowLeftLong />
        </div>
        </div>
      </section>
    </>
  );
}
export default grid;
