"use client";
import Link from "next/link";
import Image from "next/image";
import Imgzero from "../../../../public/images/google.png";
import Imgone from "../../../../public/images/face.png";
import "../../../../public/sass/pages/reset.scss";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function form() {
  return (
    <section className="form">
      <div className="parent">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="outer_form">
              <div className="inner_form">
                <h3>Reset Password</h3>
                <p>Strong password include numbers, letters and special symbols.</p>
                <Form>
                  <Form.Group
                    className="form-group"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>
                      Password<span>*</span>
                    </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group
                    className="form-group"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>
                      Confirm Password<span>*</span>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Re-enter Password"
                    />
                  </Form.Group>
                  <Button variant="primary" className="button1" type="submit">
                    Submit
                  </Button>

                  <Button variant="primary" type="submit">
                      Cancel
                    </Button>
                </Form>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
export default form;