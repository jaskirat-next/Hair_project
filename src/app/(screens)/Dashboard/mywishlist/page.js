"use client";

import Slidebar from "@/app/components/Slidebar";
import { FaArrowLeft, FaHeart, FaRegHeart, FaTruckFast } from "react-icons/fa6";
import { BsMailbox2 } from "react-icons/bs";
import "../../../../../public/sass/pages/mywhishlist.scss";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Imgtwo from "../../../../../public/images/hair3.png";
import Imgthree from "../../../../../public/images/hair4.png";
import Imgfour from "../../../../../public/images/hair5.png";
import Imgzero from "../../../../../public/images/profile.jpg";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

function Mywishlist() {
  let statusLabel = {
    1: 'In stock',
    2: 'Out of stock'
  }
  const [check3, setCheck3] = useState(false);
  // console.log(check3);

console.log("hello1");
useEffect(()=>{
  console.log("hello 2")
})
console.log("hello3");

const [state, setState] = useState(false);



  let list = [
    {
      heading: "Messy Juda Bun Extension",
      heading2: "Lorem ipsum dolor sit amet. Lorem ipsumpsum dol ....",
      image: Imgtwo,
      'status' : 2,

    },
    {
      heading: "Messy Juda Bun Extension",
      heading2: "Lorem ipsum dolor sit amet. Lorem ipsumpsum dol ....",
      image: Imgthree,
      'status' : 1,
    },
  ];

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
      <section className="dashboard_section my_orders_section my_wishlist_section">
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
                      <div className="left">
                        <h3>
                          My Wishlist (<span>6</span>)
                        </h3>
                      </div>
                      <div className="right">
                        <div className="filter">
                          <Link href="#">Filter</Link>
                        </div>
                        <div className="sort_by">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                            >
                              Sort by
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Product Category (A-Z)
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Product Category (Z-A)
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Product Title (A-Z)
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Product Title (Z-A)
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Product Price (Low-High)
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Product Price (High-Low)
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </div>
                    {list.map((item, index) => (
                      <div className="sec_1">
                        <div className={`stock ${item.status == 1 ? "stock" :"outof_stock"  }`}>{statusLabel[item.status]}</div>
                        <div className="left">
                          {check3 ? (
                            <div className="icon">
                              <FaHeart onClick={() => setCheck3(false)} />
                            </div>
                          ) : (
                            <div className="icon">
                              <FaRegHeart onClick={() => setCheck3(true)} />
                            </div>
                          )}
                          <div className="img_area">
                            <Image src={item.image} alt="/"></Image>
                          </div>
                        </div>
                        <div className="right">
                          <div className="left_child">
                            <div className="content">
                              <h3>{item.heading}</h3>
                              <p>{item.heading2}</p>
                              <div className="price">
                                <h3>$ 150</h3>
                                <h4>$ 200</h4>
                              </div>
                              <div className="order_delivered">
                                <div className="right_box">
                                  <FaTruckFast className="icon" />
                                  <h3>Delivered on 13th May, 2023</h3>
                                </div>
                                <div className={`cart ${item.status==1 ? "cart" : "not_able"}`}>
                              <button type="submit">Add to Cart</button>
                            <div className="icon">
                            <MdDelete />
                            </div>
                            </div>
                              </div>
                            </div>
                          </div>
                          <div className="right_child">
                            {/* <div className="cart">
                              <button type="submit">Add to Cart</button>
                            </div>
                            <div className="icon">
                            <MdDelete />
                            </div> */}
                          </div>
                        </div>
                      </div>
                    ))}
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
export default Mywishlist;
