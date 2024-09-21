import Slidebar from "@/app/components/Slidebar";
import { FaArrowLeft } from "react-icons/fa6";
import "../../../../../public/sass/pages/change_password.scss";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Imgzero from "../../../../../public/images/profile.jpg";
import { FaRegEdit } from "react-icons/fa";

function new_address() {
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
      <section className="dashboard_section change_password">
        <div className="upper_layer">
          <div className="parent">
            <div className="left_area">
              <Slidebar />
            </div>
            <div className="right_area">
              <div className="heading">
                <h3>Change Password</h3>
              </div>
              <Container>
                <Row>
                  <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Form>
                      <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                          <FloatingLabel
                            controlId="floatingPassword"
                            label="Old Password"
                          >
                            <Form.Control
                              type="password"
                              placeholder="Password"
                            />
                          </FloatingLabel>
                          <FloatingLabel
                            controlId="floatingPassword"
                            label="New Password"
                          >
                            <Form.Control
                              type="password"
                              placeholder="Password"
                            />
                          </FloatingLabel>

                          <FloatingLabel
                            controlId="floatingPassword"
                            label="Confirm Password"
                          >
                            <Form.Control
                              type="password"
                              placeholder="Password"
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>
                      <div className="buttons">
                        <div className="cbutton">
                          <Link href="#">Cancel</Link>
                        </div>
                        <button type="submit">Submit</button>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default new_address;
