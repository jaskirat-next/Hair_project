"use client";
import Link from "next/link";
import Image from "next/image";
import Imgzero from "../../../../public/images/google.png";
import Imgone from "../../../../public/images/face.png";
import "../../../../public/sass/pages/signup.scss";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaRegEnvelope } from "react-icons/fa6";
import { useRouter } from "next/navigation";

function form() {
  const router = useRouter()

  const handleSubmit = (e)=>{
    e.preventDefault()
    router.push("/reset")
  }
  return (
    <section className="form forgot_pass">
      <div className="parent">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="outer_form">
                <div className="inner_form">
                  <h3>Forgot Password?</h3>
                  <p>
                    Please enter the email address you use when creating your
                    account, We’ll send you the instructions to reset your
                    password
                  </p>
                  <Form method="POST" action="">
                    <Form.Group
                      className="form-group inp"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>
                        Email address<span>*</span>
                      </Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <div className="enevelop">
                        <FaRegEnvelope />
                      </div>
                    </Form.Group>

                    <Button onClick={handleSubmit} variant="primary" className="button1" type="submit">
                      Submit
                    </Button>

                    <Button variant="primary" class='btn-white'type="submit">
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
