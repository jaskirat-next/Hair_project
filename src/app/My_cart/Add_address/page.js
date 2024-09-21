"use client";

import Image from "next/image";
import Imgzero from "../../../../public/images/location.png";
import "../../../../public/sass/pages/add_new_address.scss";
import { Col, Container, Form, Row } from "react-bootstrap";
import { RxCrossCircled } from "react-icons/rx";
import Link from "next/link";

function Add_address(){
    return(
        <section className="main">
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="new_address">
                <div className="full_form">
              <div className="left_area">
                <div className="img_area">
                  <Image src={Imgzero} height="auto" width="auto"></Image>
                </div>
              </div>
              <div className="right_area">
                      <div className="parent">
                        <div className="icon">
                          <Link href="#">
                            <RxCrossCircled />
                          </Link>
                        </div>
                <Container>
                  <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <h3>Add New Address</h3>
                        <Form>
                          <Row>
                            <div className="upper_form">
                            <Col
                              xxl={12}
                              xl={12}
                              lg={12}
                              md={12}
                              sm={12}
                              xs={12}
                            >
                              <Form.Group>
                                <Form.Label>Enter Apartment/House #</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter Apartment/House #"
                                />
                              </Form.Group>
                            </Col>
                            
                            <Col
                              xxl={12}
                              xl={12}
                              lg={12}
                              md={12}
                              sm={12}
                              xs={12}
                            >
                              <Form.Group>
                                <Form.Label>Street Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Street Name"
                                />
                              </Form.Group>
                            </Col>
                            </div>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                              <Form.Select aria-label="Default select example">
                                <option>State</option>
                                <option value="1">Punjab</option>
                                <option value="2">Mumbai</option>
                                <option value="3">Himachal</option>
                                <option value="3">Haryana</option>
                                <option value="3">Utrakhand</option>
                              </Form.Select>
                            </Col>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                              <Form.Select aria-label="Default select example">
                                <option>City</option>
                                <option value="1">Ludhiana</option>
                                <option value="2">Jalandhar</option>
                                <option value="3">Bathinda</option>
                                <option value="3">Jamalpur</option>
                                <option value="3">Barnala</option>
                              </Form.Select>
                            </Col>

                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                              <Form.Group>
                                <Form.Label>Pin code</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Pin code"
                                />
                              </Form.Group>
                            </Col>

                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                              <Form.Group>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Phone Number"
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <button type="submit">Submit</button>
                        </Form>
                    </Col>
                  </Row>
                </Container>
                      </div>
              </div>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    );
}
export default Add_address;