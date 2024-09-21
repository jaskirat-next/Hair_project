"use client";
import Link from "next/link";
import Image from "next/image";
import Imgzero from "../../../../public/images/google.png";
import Imgone from "../../../../public/images/face.png";
import "../../../../public/sass/pages/signup.scss";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/navigation";

function form() {
  const router = useRouter()
  return (
    <section className="form">
      <div className="parent">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="outer_form">
              <div className="inner_form">
                <h3>Lets Start!</h3>
                <p>Already have an account ? <Link href="login_page">Sign in</Link></p>
                <Form>
                  <Form.Group className="form-group" controlId="formBasicName">
                    <Form.Label>
                      Name<span>*</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>
                  <Form.Group
                    className="form-group"
                    controlId="formBasicContact"
                  >
                    <Form.Label>
                      Contact Number<span>*</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Contact Number"
                    />
                  </Form.Group>
                  <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Label>
                      Email address<span>*</span>
                    </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

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
                  <Button variant="primary" type="submit" onClick={() => {router.push("/otp")}}>
                    Submit
                  </Button>
                </Form>
                <div className="line_content">
                  <div className="line"></div>
                  <span>or</span>
                  <div className="line"></div>
                </div>
                <div className="signup_with">
                  <div className="company">
                    <div className="img_area">
                      <Image src={Imgzero} alt="/"></Image>
                    </div>
                    <h3>Continue with Google</h3>
                  </div>
                  <div className="company">
                    <div className="img_area">
                      <Image src={Imgone} alt="/"></Image>
                    </div>
                    <h3>Continue with Facebook</h3>
                  </div>
                </div>
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