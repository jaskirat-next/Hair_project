import Image from "next/image";
import Imgone from "../../../public/images/frame2.png";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import "../../../public/sass/pages/footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-solid-svg-icons";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const Footer = () =>{
    return(
        <>
        <div className="footer">
        <Container>
            <Row>
                <Col  xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="inner_parent">
                    <Row>
                        <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={12}>
                            <div className="first">
                            <div className="img_area">
                                <Image src={Imgone} alt="/"></Image>
                            </div>
                            </div>
                        </Col>
                        <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12}>
                        <div className="upper up">
                            <Row>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                            <div className="social_list">
                                <h3>Follow us</h3>
                                <ul>
                                    <li><FaSquareFacebook  className="face"/><Link href="https://www.facebook.com/">Facebook</Link></li>
                                    <li><FaInstagram  className="insta"/><Link href="https://www.instagram.com/">Instagram</Link></li>
                                    <li><FaTwitter className="twitter"/><Link href="https://x.com/">Twitter</Link></li>

                                </ul>
                            </div>
                            </Col>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                            <div className="list">
                                <h3>Services</h3>
                                <ul>
                                    <li><MdOutlineKeyboardDoubleArrowRight className="arrow"/><Link href="/grid_products">Product</Link></li>
                                    <li><MdOutlineKeyboardDoubleArrowRight className="arrow"/><Link href="/list_products">Collection</Link></li>
                                </ul>
                            </div>
                            </Col>
                            </Row>
                            </div>
                        </Col>

                        <Col xxl={5} xl={5} lg={5} md={5} sm={5} xs={12}>
                        <div className="upper">
                            <Row>
                                <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                            <div className="list">
                                <h3>Useful Links</h3>
                                <ul>
                                <li><MdOutlineKeyboardDoubleArrowRight className="arrow"/><Link href="/termscon">Terms & Conditions</Link></li>
                                    <li><MdOutlineKeyboardDoubleArrowRight className="arrow"/><Link href="/privacy_policy">Privacy Policy</Link></li>
                                    <li><MdOutlineKeyboardDoubleArrowRight className="arrow"/><Link href="/faq">FAQ's</Link></li>

                                </ul>
                            </div>
                            </Col>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                            <div className="list">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><MdOutlineKeyboardDoubleArrowRight className="arrow"/><Link href="/cancel">Cancellations</Link></li>
                                    <li><MdOutlineKeyboardDoubleArrowRight className="arrow"/><Link href="/returns">Returns</Link></li>
                                </ul>
                            </div>
                            </Col>
                            </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
                </Col>
            </Row>
        </Container>
        </div>
        </>
    );
}
export default Footer;