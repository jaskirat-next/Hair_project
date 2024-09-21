"use client";

import Image from "next/image";
import { Col, Container, Row, Form, Dropdown } from "react-bootstrap";
import imgg from "../../../../../public/images/rectangle.png";
import imgg2 from "../../../../../public/images/banner.jpg";
import imgg3 from "../../../../../public/images/banner3.jpg";
import imgg4 from "../../../../../public/images/banner3.jpg";
import Imgzero from "../../../../../public/images/hair3.png";
import Imgone from "../../../../../public/images/hair4.png";
import Imgtwo from "../../../../../public/images/hair5.png";
import Imgthree from "../../../../../public/images/hair.png";
import "../../../../../public/sass/pages/grid_product.scss";
import { MdViewList } from "react-icons/md";
import { IoGrid } from "react-icons/io5";
import { CiCircleRemove, CiHeart } from "react-icons/ci";


function Cart(props){
    return(
        <>
        <section className="grid">
        <div className="parent">
          <Container>
            <Row>
              <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="inner_parent">
                  <Row>
                    <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                      <div className="cart">
                        <div className="icon">
                          <CiHeart />
                        </div>
                        <div className="stripe">ON SALE</div>
                        <div className="img_area">
                          <Image src={Imgzero} alt="/"></Image>
                        </div>
                        <div className="content">
                          <div className="hproduct">Hair Product</div>
                          <h3>Messy Juda Bun Extension Brown</h3>
                          <p>
                            {props.info}
                          </p>
                          <div className="last">
                            <div className="stock">{props.out}</div>
                            <div className="price">
                              <h4>$ 200</h4>
                              <h3>$ 150</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        
        </div>
      </section>
        </>
    );
}
export default Cart;