"use client";

import { Accordion, Col, Container, Form, Row } from "react-bootstrap";
import { HiArrowSmallLeft } from "react-icons/hi2";
import "../../../../public/sass/pages/details.scss";
import Link from "next/link";
import Image from "next/image";
import Imgmoney from "../../../../public/images/money.png";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import image1 from "../../../../public/images/hair3.png";
import image2 from "../../../../public/images/hair5.png";
import image3 from "../../../../public/images/hair.png";
import { useState } from "react";

function Details() {
  const [showmore, setShowmore] = useState(false);

  let list = [
    {
      image: image1,
      heading: "Messy Juda Bun Extension Lorem ipsum dolor sit "
    },
    {
      image: image2,
      heading: "Messy Juda Bun Extension",
      paragraph:
        'gorgeous choice is inspired by Arabic Jada, meaning "excellence," and the Hebrew names Yehudah and Judah, meaning "praised',
    },
    {
      image: image3,
      heading: "Clip Ear to Ear Volumizer",
      paragraph:
        'gorgeous choice is inspired by Arabic Jada, meaning "excellence," and the Hebrew names Yehudah and Judah, meaning "praised',
    }
  ];

  const text = list.heading;
  return (
    <>
      <section className="top_section">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="content">
                <div className="arrow_icon">
                  <Link href="#">
                    <HiArrowSmallLeft />
                  </Link>
                </div>
                <h3>
                  My Cart (<span>6</span>)
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="content_details">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="for_flex">
                <div className="accordian_area">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Delivery Address</Accordion.Header>
                      <Accordion.Body>
                        <div className="form_body">
                          <div className="add_1">
                            <Form.Check
                              type="radio"
                              name="group1"
                              label={`Charles John `}
                              id={`disabled-default`}
                            />
                            <div className="content">
                              <p>+1-80225678</p>
                              <p>
                                123 CA Electric avenue, Los Angeles, California
                                90008
                              </p>
                            </div>
                            <div className="icons">
                              <Link href="#">
                                <FaEdit />
                              </Link>
                              <Link href="#">
                                <MdDelete />
                              </Link>
                            </div>
                          </div>

                          <div className="add_1">
                            <Form.Check
                              type="radio"
                              name="group1"
                              label={`Charles John `}
                              id={`disabled-default`}
                            />
                            <div className="content">
                              <p>+1-80225678</p>
                              <p>
                                123 CA Electric avenue, Los Angeles, California
                                90008
                              </p>
                            </div>
                            <div className="icons">
                              <Link href="#">
                                <FaEdit />
                              </Link>
                              <Link href="#">
                                <MdDelete />
                              </Link>
                            </div>
                          </div>

                          <div className="add_2">
                            <h3>Add New Address</h3>
                            <div className="icon">
                              <Link href="#">
                                <IoIosAddCircleOutline />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Order Summary</Accordion.Header>
                      <Accordion.Body>
                        {list.map((item, index) => (
                          <div className="order_summary">
                            <div className="left_area">
                              <div className="img_area">
                                <Image
                                  src={item.image}
                                  height="auto"
                                  width="auto"
                                ></Image>
                              </div>
                            </div>
                            <div className="right_area">
                              <div className="tag">Hair product</div>
                              <h3>{item.heading}</h3>
                              <p>
                                {/* {showmore ? text : text.substring(0 , 100)} */}
                                {item.paragraph}
                              </p>
                              {/* <button
                                href="#"
                                onClick={() => {
                                  setShowmore(!showmore);
                                }}
                              >
                                .......
                              </button> */}
                              <h4>$150</h4>
                              <h2>$200</h2>
                            </div>
                          </div>
                        ))}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Payment Method</Accordion.Header>
                      <Accordion.Body>
                        <div className="debit_card">
                          <h3>Debit / Credit Card</h3>
                          <div className="radio">
                            <Form>
                              <Form.Check type="radio" />
                            </Form>
                            <div className="old_info">
                              <div className="left">
                                <h3>56**************34</h3>
                                <h2>06/23</h2>
                              </div>
                              <div className="right">
                                <div className="red"></div>
                              </div>
                            </div>
                          </div>
                          <h3>Add New Card</h3>
                          <div className="add_new_card">
                            <Form>
                              <div className="card_num">
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Control
                                    type="tel"
                                    placeholder="Card Number"
                                  />
                                </Form.Group>
                              </div>
                              <h3>Valid thru</h3>
                              <div className="for_flex3">
                              <div className="time">
                              <Form.Select size="lg">
                                <option>MM</option>
                              </Form.Select>
                              <Form.Select size="lg">
                                <option>YY</option>
                              </Form.Select>
                              </div>
                              <div className="cvv">
                              <Form.Group
                                 
                                  controlId="formBasicEmail"
                                >
                                  <Form.Control
                                    type="tel"
                                    placeholder="Card Number"
                                  />
                                </Form.Group>
                              </div>
                              </div>
                            </Form>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <button type="button">Continue Shopping</button>
                </div>
                <div className="right">
                  <div className="price_details">
                    <div className="heading">
                      <h3>Price Details</h3>
                    </div>
                    <div className="total_price">
                      <div className="item_price">
                        <span>Price(3 items)</span>
                        <span>$3200</span>
                      </div>
                      <div className="item_price ">
                        <span>Discount</span>
                        <span className="green">-$1800</span>
                      </div>
                      <div className="item_price">
                        <span>Tax</span>
                        <span className="red">+$18</span>
                      </div>
                      <div className="item_price">
                        <span>Delivery Charges</span>
                        <span className="green">Free</span>
                      </div>
                    </div>

                    <div className="total_amount">
                      <div className="for_flex2">
                        <span>Total Amount</span>
                        <span>$1400</span>
                      </div>
                      <p>Estimated shipping time: 2 days</p>
                    </div>

                    <div className="money">
                      <div className="img_area">
                        <Image src={Imgmoney} height="auto" width="auto" />
                      </div>
                      <p>You will save $1800 on this order</p>
                    </div>
                  </div>
                  <div className="buttons">
                    <div className="checkout">
                      <button type="button">Proceed to Checkout</button>
                    </div>
                    <div className="cancel">
                      <button type="button">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default Details;
