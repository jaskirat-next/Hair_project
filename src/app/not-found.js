'use client'
import "../../public/sass/pages/error.scss";
import Image from "next/image";
import Imgzero from "../../public/images/objects.png";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
const NotFound=()=> {
  return (
    <section className="main">
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="parent">
              <h3>Page Not Found!</h3>
              <p>
                The Page you are trying to access does not exist or have been
                removed
              </p>
              <p>Try go back to homepage</p>
              <Link href="/" className="button">Home</Link>
            </div>
            <div className="img_area">
              <Image src={Imgzero} height="auto" width="auto"></Image>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default NotFound;
