import "../../../../public/sass/pages/error.scss";
import Image from "next/image";
import Imgzero from "../../../../public/images/nodata.png";
import { Col, Container, Row } from "react-bootstrap";
function nodata() {
  return (
    <section className="main">
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="parent">
              <h3>No Data Found!</h3>
              <p>Sorry ! We could not found any match for your Search</p>
              <p>Try Searching again</p>
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
export default nodata;
