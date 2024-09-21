import Slidebar from "@/app/components/Slidebar";
import { FaArrowLeft } from "react-icons/fa6";
import "../../../../../public/sass/pages/order_details.scss";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Imgzero from "../../../../../public/images/profile.jpg";
import Imgone from "../../../../../public/images/hair3.png";
import { FaRegEdit } from "react-icons/fa";

function Order_details() {
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
      <section className="dashboard_section order_details_section">
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
                      <h3>Order Details</h3>
                      <div className="delivered">Delivered</div>
                    </div>
                    <div className="content">
                      <div className="img_area">
                        <Image src={Imgone} height="auto" width="auto"></Image>
                      </div>
                      <div className="product_info">
                        <h3>Messy Juda Bun Extension</h3>
                        <p>
                          Lorem ipsum dolor sit amet. Lorem ipsumpsum dol ....
                        </p>
                        <div className="price">
                          <h3>$ 150</h3>
                          <h4>$ 200</h4>
                        </div>
                      </div>
                    </div>
                    <div className="order_heading">
                      <h3>Order Information</h3>
                      <div className="order_info">
                        <div className="order_topic">
                          <div className="topic">Order Id :</div>
                          <div className="topic">Ordered on :</div>
                          <div className="topic">Delivered on : </div>
                          <div className="topic">Payment Status :</div>
                          <div className="topic">Address :</div>
                        </div>
                        <div className="order_answer">
                          <div className="answer">#74878</div>
                          <div className="answer">13 May, 2023</div>
                          <div className="answer">13 May, 2023 </div>
                          <div className="answer">Paid</div>
                          <div className="answer">
                            2722 Ponce De Leon Blvd Coral Gables State Florida,
                            3134
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="price_detail_heading">
                      <h3>Price Detail</h3>
                      <div className="price_detail">
                        <div className="price_topic">
                          <div className="topic">Price(3 items)</div>
                          <div className="topic">Discount</div>
                          <div className="topic">Delivery Charges</div>
                          <div className="topic total">Total Amount</div>
                        </div>
                        <div className="price_answer">
                          <div className="answer">$3200</div>
                          <div className="answer green">-$1800</div>
                          <div className="answer green">Free</div>
                          <div className="answer total">$1400</div>
                        </div>
                      </div>
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
export default Order_details;
