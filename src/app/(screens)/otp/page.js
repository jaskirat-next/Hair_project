"use client";
import Link from "next/link";
import Image from "next/image";
import "../../../../public/sass/pages/otp.scss";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import OTPInput from "react-otp-input";
import { useState } from "react";
import { useRouter } from "next/navigation";

function form() {
  const [otp, setOtp2] = useState("");
  const router = useRouter()
  return (
    <section className="form otp_section">
      <div className="parent">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="outer_form">
                <div className="inner_form">
                  <h3>OTP Verification</h3>
                  <p>Please enter the OTP sent to your registered Email Address</p>
                  <Form>
                    <div className="otp_main">
                    <OTPInput
                      value={otp}
                      onChange={setOtp2}
                      numInputs={6}
                      inputStyle={"inputstyle"}
                      containerStyle={"containerstyle"}
                      inputType="tel"
                      // renderSeparator={<span>-</span>}
                      renderInput={(props) => <input {...props} />}
                    />
                    </div>
                    <div className="forgot">
                        <Link href="/">Resend OTP</Link>
                    </div>

                    <Button variant="primary" type="submit" onClick={() => {router.push("/")}}>
                      Login
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
