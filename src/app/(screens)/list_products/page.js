"use client";
import Image from "next/image";
import "../../../../public/sass/pages/list.scss";
import Imgg from "../../../../public/images/rectangle.png";
import { Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Imgzero from "../../../../public/images/shampoo.jpeg";
import Imgone from "../../../../public/images/hair.png";
import Imgtwo from "../../../../public/images/hair3.png";
import Imgthree from "../../../../public/images/hair4.png";
import Imgfour from "../../../../public/images/hair5.png";
import { MdViewList } from "react-icons/md";
import { IoGrid, IoGridOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import Link from "next/link";
import { CiCircleRemove } from "react-icons/ci";
import { useRouter } from "next/navigation";

export default function Home() {
  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  const [check8, setCheck8] = useState(false);
  const [check9, setCheck9] = useState(false);
  console.log(check);
  const router = useRouter()
  return (
    <>
      <section className="rectangle">
        <div className="img_area">
          <Image src={Imgg} alt="/"></Image>
        </div>
        <div className="content">
          <h3>Products</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.{" "}
          </p>
        </div>
      </section>
      <section>
        <div className="sec_3">
          <div className="parent">
            <Container>
              <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                  <div className="total">
                    <div className="tnumber">
                      <h3>
                        Total number of Products(<span>9</span>)
                      </h3>
                    </div>
                    <div className="page">
                      <Form>
                        <span>page</span>
                        <Form.Select aria-label="Default select example">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="3">4</option>
                          <option value="3">5</option>
                          <option value="3">6</option>
                          <option value="3">7</option>
                          <option value="3">8</option>
                          <option value="3">9</option>
                          <option value="3">10</option>
                        </Form.Select>
                        <span>of 10</span>
                      </Form>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>

      <section className="sec_4">
        <div className="parent">
          <Container>
            <Row>
              <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="inner_parent">
                  <div className="upper">
                    <div className="sort_by">
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Sort by: Product Title (A-Z)
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
                    <div className="view">
                      <ul>
                        <li onClick={()=>{router.push("/grid_products")}}>
                          <IoGrid />
                        </li>
                        <li>
                          <MdViewList />
                        </li>
                        <li>Filter</li>
                      </ul>
                    </div>
                  </div>
                  <div className="list">
                    <ul>
                      <li>
                        In Stock{" "}
                        <Link href="/">
                          <CiCircleRemove />
                        </Link>
                      </li>
                      <li>
                        Min. $60 - $600{" "}
                        <Link href="/">
                          <CiCircleRemove />
                        </Link>
                      </li>
                      <li>
                        On Sale{" "}
                        <Link href="/">
                          <CiCircleRemove />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      
      <section className="cart">
        <div className="cart_list">
          <Container>
            <Row>
              <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="inner_parent">
                  <div className="sec_1">
                    <div className="stripe">ON SALE</div>
                    <div className="hproduct">Hair Product</div>
                    <div className="stock">In stock</div>
                    <div className="left">
                      {check ? (
                        <div className="icon">
                          <FaHeart onClick={() => setCheck(false)} />
                        </div>
                      ) : (
                        <div className="icon">
                          <FaRegHeart onClick={() => setCheck(true)} />
                        </div>
                      )}

                      <div className="img_area">
                        <Image src={Imgzero} alt="/"></Image>
                      </div>
                    </div>
                    <div className="right">
                      <div className="left_child">
                        <div className="content">
                          <h3>Clip Ear to Ear Hair Mask </h3>
                          <p>
                            Lorem ipsum dolor sit amet. Lorem ipsum dol sit amet
                            ips dolor sit amet. ipsum dolor sit amet ipsum dol
                            sit amet ips dolor sit amet ipsum dol sit amet ips
                            dolor sit amet.
                          </p>
                          <h3>$ 150</h3>
                        </div>
                      </div>
                      <div className="right_child">
                        <div className="cart">
                          <button type="submit">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sec_1">
                    <div className="stripe">ON SALE</div>
                    <div className="hproduct">Hair Product</div>
                    <div className="outof">Out of Stock</div>
                    <div className="left">
                      {check2 ? (
                        <div className="icon">
                          <FaHeart onClick={() => setCheck2(false)} />
                        </div>
                      ) : (
                        <div className="icon">
                          <FaRegHeart onClick={() => setCheck2(true)} />
                        </div>
                      )}
                      <div className="img_area">
                        <Image src={Imgone} alt="/"></Image>
                      </div>
                    </div>
                    <div className="right">
                      <div className="left_child">
                        <div className="content">
                          <h3>Clip Ear to Ear Hair Mask </h3>
                          <p>
                            Lorem ipsum dolor sit amet. Lorem ipsum dol sit amet
                            ips dolor sit amet. ipsum dolor sit amet ipsum dol
                            sit amet ips dolor sit amet ipsum dol sit amet ips
                            dolor sit amet.
                          </p>
                          <h3>$ 150</h3>
                        </div>
                      </div>
                      <div className="right_child">
                        <div className="cart">
                          <button type="submit">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sec_1">
                    <div className="hproduct">Hair Product</div>
                    <div className="stock">In stock</div>
                    <div className="left">
                      {check3 ?
                      <div className="icon">
                      <FaHeart onClick={() => setCheck3(false)}/>
                      </div>
                      :
                      <div className="icon">
                        <FaRegHeart onClick={() => setCheck3(true)}/>
                      </div>
                      }
                      <div className="img_area">
                        <Image src={Imgtwo} alt="/"></Image>
                      </div>
                    </div>
                    <div className="right">
                      <div className="left_child">
                        <div className="content">
                          <h3>Clip Ear to Ear Hair Mask </h3>
                          <p>
                            Lorem ipsum dolor sit amet. Lorem ipsum dol sit amet
                            ips dolor sit amet. ipsum dolor sit amet ipsum dol
                            sit amet ips dolor sit amet ipsum dol sit amet ips
                            dolor sit amet.
                          </p>
                          <div className="price">
                          <h3>$ 150</h3>
                          </div>
                        </div>
                      </div>
                      <div className="right_child">
                        <div className="cart">
                          <button type="submit">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sec_1">
                    <div className="hproduct">Hair Product</div>
                    <div className="stock">In stock</div>
                    <div className="left">
                      {check4 ?
                      <div className="icon">
                      <FaHeart onClick={() => setCheck4(false)}/>
                      </div>
                      :
                      <div className="icon">
                        <FaRegHeart onClick={() => setCheck4(true)}/>
                      </div>
                      }
                      <div className="img_area">
                        <Image src={Imgthree} alt="/"></Image>
                      </div>
                    </div>
                    <div className="right">
                      <div className="left_child">
                        <div className="content">
                          <h3>Clip Ear to Ear Hair Mask </h3>
                          <p>
                            Lorem ipsum dolor sit amet. Lorem ipsum dol sit amet
                            ips dolor sit amet. ipsum dolor sit amet ipsum dol
                            sit amet ips dolor sit amet ipsum dol sit amet ips
                            dolor sit amet.
                          </p>
                          <div className="price">
                          <h3>$ 150</h3>
                          </div>
                        </div>
                      </div>
                      <div className="right_child">
                        <div className="cart">
                          <button type="submit">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sec_1">
                    <div className="stripe">ON SALE</div>
                    <div className="hproduct">Hair Product</div>
                    <div className="stock">In stock</div>
                    <div className="left">
                      {check5 ?
                      <div className="icon">
                      <FaHeart onClick={() => setCheck5(false)}/>
                      </div>
                      :
                      <div className="icon">
                        <FaRegHeart onClick={() => setCheck5(true)}/>
                      </div>
                      }
                      <div className="img_area">
                        <Image src={Imgfour} alt="/"></Image>
                      </div>
                    </div>
                    <div className="right">
                      <div className="left_child">
                        <div className="content">
                          <h3>Clip Ear to Ear Hair Mask </h3>
                          <p>
                            Lorem ipsum dolor sit amet. Lorem ipsum dol sit amet
                            ips dolor sit amet. ipsum dolor sit amet ipsum dol
                            sit amet ips dolor sit amet ipsum dol sit amet ips
                            dolor sit amet.
                          </p>
                          <div className="price">
                          <h3>$ 150</h3>
                          </div>
                        </div>
                      </div>
                      <div className="right_child">
                        <div className="cart">
                          <button type="submit">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sec_1">
                    <div className="stripe">ON SALE</div>
                    <div className="hproduct">Hair Product</div>
                    <div className="stock">In stock</div>
                    <div className="left">
                      {check6 ?
                      <div className="icon">
                      <FaHeart onClick={() => setCheck6(false)}/>
                      </div>
                      :
                      <div className="icon">
                        <FaRegHeart onClick={() => setCheck6(true)}/>
                      </div>
                      }
                      <div className="img_area">
                        <Image src={Imgone} alt="/"></Image>
                      </div>
                    </div>
                    <div className="right">
                      <div className="left_child">
                        <div className="content">
                          <h3>Clip Ear to Ear Hair Mask </h3>
                          <p>
                            Lorem ipsum dolor sit amet. Lorem ipsum dol sit amet
                            ips dolor sit amet. ipsum dolor sit amet ipsum dol
                            sit amet ips dolor sit amet ipsum dol sit amet ips
                            dolor sit amet.
                          </p>
                          <div className="price">
                          <h3>$ 150</h3>
                          </div>
                        </div>
                      </div>
                      <div className="right_child">
                        <div className="cart">
                          <button type="submit">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sec_1">
                    <div className="stripe">ON SALE</div>
                    <div className="hproduct">Hair Product</div>
                    <div className="stock">In stock</div>
                    <div className="left">
                      {check7 ?
                      <div className="icon">
                      <FaHeart onClick={() => setCheck7(false)}/>
                      </div>
                      :
                      <div className="icon">
                        <FaRegHeart onClick={() => setCheck7(true)}/>
                      </div>
                      }
                      <div className="img_area">
                        <Image src={Imgtwo} alt="/"></Image>
                      </div>
                    </div>
                    <div className="right">
                      <div className="left_child">
                        <div className="content">
                          <h3>Clip Ear to Ear Hair Mask </h3>
                          <p>
                            Lorem ipsum dolor sit amet. Lorem ipsum dol sit amet
                            ips dolor sit amet. ipsum dolor sit amet ipsum dol
                            sit amet ips dolor sit amet ipsum dol sit amet ips
                            dolor sit amet.
                          </p>
                          <div className="price">
                          <h3>$ 150</h3>
                          </div>
                        </div>
                      </div>
                      <div className="right_child">
                        <div className="cart">
                          <button type="submit">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sec_1">
                    <div className="stripe">ON SALE</div>
                    <div className="hproduct">Hair Product</div>
                    <div className="stock">In stock</div>
                    <div className="left">
                      {check8 ?
                      <div className="icon">
                      <FaHeart onClick={() => setCheck8(false)}/>
                      </div>
                      :
                      <div className="icon">
                        <FaRegHeart onClick={() => setCheck8(true)}/>
                      </div>
                      }
                      <div className="img_area">
                        <Image src={Imgthree} alt="/"></Image>
                      </div>
                    </div>
                    <div className="right">
                      <div className="left_child">
                        <div className="content">
                          <h3>Clip Ear to Ear Hair Mask </h3>
                          <p>
                            Lorem ipsum dolor sit amet. Lorem ipsum dol sit amet
                            ips dolor sit amet. ipsum dolor sit amet ipsum dol
                            sit amet ips dolor sit amet ipsum dol sit amet ips
                            dolor sit amet.
                          </p>
                          <div className="price">
                          <h3>$ 150</h3>
                          </div>
                        </div>
                      </div>
                      <div className="right_child">
                        <div className="cart">
                          <button type="submit">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sec_1">
                    <div className="stripe">ON SALE</div>
                    <div className="hproduct">Hair Product</div>
                    <div className="stock">In stock</div>
                    <div className="left">
                      {check9 ?
                      <div className="icon">
                      <FaHeart onClick={() => setCheck9(false)}/>
                      </div>
                      :
                      <div className="icon">
                        <FaRegHeart onClick={() => setCheck9(true)}/>
                      </div>
                      }
                      <div className="img_area">
                        <Image src={Imgfour} alt="/"></Image>
                      </div>
                    </div>
                    <div className="right">
                      <div className="left_child">
                        <div className="content">
                          <h3>Clip Ear to Ear Hair Mask </h3>
                          <p>
                            Lorem ipsum dolor sit amet. Lorem ipsum dol sit amet
                            ips dolor sit amet. ipsum dolor sit amet ipsum dol
                            sit amet ips dolor sit amet ipsum dol sit amet ips
                            dolor sit amet.
                          </p>
                          <div className="price">
                          <h3>$ 150</h3>
                          </div>
                        </div>
                      </div>
                      <div className="right_child">
                        <div className="cart">
                          <button type="submit">Add to Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}
