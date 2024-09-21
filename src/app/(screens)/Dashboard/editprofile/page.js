"use client"
import Slidebar from "@/app/components/Slidebar";
import { FaArrowLeft } from "react-icons/fa6";
import "../../../../../public/sass/pages/myprofile.scss";
import { Col, Container, Form, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Imgzero from "../../../../../public/images/profile.jpg";
import "../../../../../public/sass/pages/editprofile.scss";
import { FaRegEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";


function myprofile() {
  return (
    <>
      <section className="top_section">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="parent">
                <Link href="#">
                  <FaArrowLeft className="icon" />
                </Link>
                <h3>My Account</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="dashboard_section edit_profile_section">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="upper_layer">
                <div className="parent">
                  <div className="left_area">
                    <Slidebar />
                  </div>
                  <div className="right_area">
                    <div className="profile_textarea">
                      <h3>My Profile</h3>
                    </div>
                    <div className="edit_profile">
                    <div className="edit">
                      
                        <div class='image_parent'>
                            <div className="icon">
                            <Link href="#">
                            <MdCancel />
                            </Link>
                            </div>
                            <div className="img_area">
                                <Image src={Imgzero} height="auto" width="auto"></Image>
                            </div>
                        </div>
                      <div className="head">
                        <h3>Charles </h3>
                      </div>
                      <p>Edit your personal information</p>
                    </div>
                    <Form>
                      <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                          <div className="parent">
                            <Form.Control
                              required
                              type="text"
                              placeholder="First Name"
                            />
                          </div>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                          <div className="parent">
                            <Form.Control
                              required
                              type="text"
                              placeholder="Last Name"
                            />
                          </div>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                          <div className="parent">
                            <Form.Control
                              required
                              type="email"
                              placeholder="Email"
                            />
                          </div>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                          <div className="parent">
                            <Form.Control
                              required
                              type="tell"
                              placeholder="Phone Number"
                            />
                          </div>
                        </Col>
                      </Row>
                      <div className="button">
                        <Link href="#">Cancel</Link>
                        <button type="submit">Save Changes</button>
                      </div>
                    </Form>
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
export default myprofile;
