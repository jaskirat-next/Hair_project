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
                  <h3>Welcome Back !</h3>
                  <p>Don't have an account? <Link href="signup_page">Sign Up</Link></p>
                  <Form>
                    <Form.Group
                      className="form-group"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>
                        Email address<span>*</span>
                      </Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group
                      className="form-group bottom"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>
                        Password<span>*</span>
                      </Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <div className="forgot">
                        <Link href="forgot_pass">forgot password ?</Link>
                    </div>

                    <Button variant="primary" type="submit" onClick={() => {router.push("/")}}>
                      Login
                    </Button>

                  </Form>
                  <div className="line_content">
                    <div className="line"></div>
                    <span>or</span>
                    <div className="line"></div>
                  </div>
                  <div className="signup_with">
                    <Link href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fwww.google.com%2F%3Fptid%3D19027681%26ptt%3D8%26fpts%3D0%26pli%3D1&ec=GAlAmgQ&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1761854814%3A1726141615990678&ddm=0" className="company">
                      <div className="img_area">
                        <Image src={Imgzero} alt="/"></Image>
                      </div>
                      <h3>Continue with Google</h3>
                    </Link>
                    <Link href="https://www.facebook.com/" className="company">
                      <div className="img_area">
                        <Image src={Imgone} alt="/"></Image>
                      </div>
                      <h3>Continue with Facebook</h3>
                    </Link>
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
