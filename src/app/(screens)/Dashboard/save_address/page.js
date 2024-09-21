import Slidebar from "@/app/components/Slidebar";
import { FaArrowLeft, FaRegCreditCard } from "react-icons/fa6";
import "../../../../../public/sass/pages/saved_address.scss";
import { Col, Container, Form, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Imgzero from "../../../../../public/images/profile.jpg";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function saved_address() {
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
      <section className="dashboard_section address_section">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="upper_layer">
                <div className="parent">
                  <div className="left_area">
                    <Slidebar />
                  </div>
                  <div className="right_area">
                    <div className="address_heading">
                      <h3>Saved Address</h3>
                    </div>
                    <Form>
                      <div className="first">
                        <Form.Check name="group1" type={"radio"} />
                        <div className="left">
                          <h3>Charles Smith</h3>
                          <div className="tag">Home</div>
                          <p>
                            2722 Ponce De Leon Blvd Coral GablesState Florida,
                            3134
                          </p>
                        </div>
                        <div className="right">
                        <Link href="#"><FaRegEdit className="icon" /></Link>
                        <Link href="#"><MdDelete className="icon" /></Link>
                        </div>
                      </div>

                      <div className="second">
                        <Form.Check name="group1" type={"radio"} />
                        <div className="left">
                          <h3>Charles Smith</h3>
                          <div className="tag">Office</div>
                          <p>
                            2722 Ponce De Leon Blvd Coral GablesState Florida,
                            3134
                          </p>
                        </div>
                        <div className="right">
                        <Link href="#"><FaRegEdit className="icon" /></Link>
                        <Link href="#"><MdDelete className="icon" /></Link>
                        </div>
                      </div>
                    </Form>
                    <button className="button">Add New Address</button>
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
export default saved_address;
