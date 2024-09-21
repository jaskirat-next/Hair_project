import { Button, Container, Row, Col } from "react-bootstrap";
import "../../../public/sass/pages/header.scss";
import Image from "next/image";
import Imgzero from "../../../public/images/frame.png";
import {
    faBars,
  faCartShopping,
  faHeart,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <section>
        <div className="parent">
          <Container>
            <Row>
              <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="inner_parent">
                  <div className="upper_header">
                    <div className="left">
                      <div className="img_area">
                        <Image src={Imgzero} alt="/"></Image>
                      </div>
                    </div>
                    <div className="right">
                      <div className="left_child">
                        <div className="icons" >
                          <div className="iconss">
                          <FontAwesomeIcon icon={faSearch} className="inner_icon"/>
                          </div>
                          <Link href='/Dashboard/mywishlist' className="iconss">
                          <FontAwesomeIcon icon={faHeart} className="inner_icon"/>
                          </Link>
                          <Link href='/My_cart/Details' className="iconss up">
                          <FontAwesomeIcon icon={faCartShopping} className="inner_icon" />
                          <div className="goli"> </div>
                          </Link>
                          <FontAwesomeIcon icon={faBars} className="inner_icon end" />
                        </div>
                      </div>
                      <div className="right_child">
                        <div className="buttons">
                          <div className="login">
                            <Link href="login_page">Login</Link>
                          </div>
                          <div className="login sign">
                            <Link href="/signup_page">Sign up</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="lower_header">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">New Arrivals</Link></li>
                <li><Link href="/grid_products">Products</Link></li>
                <li><Link href="/list_products">Collections</Link></li>
                <li><Link href="/">About us</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
