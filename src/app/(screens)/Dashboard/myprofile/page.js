"use client"
import Slidebar from "@/app/components/Slidebar";
import { FaArrowLeft } from "react-icons/fa6";
import "../../../../../public/sass/pages/myprofile.scss";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Imgzero from "../../../../../public/images/profile.jpg";
import { FaRegEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";

function myprofile() {
  const router = useRouter()
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
      <section className="dashboard_section dashboard_profile">
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
                      <h3>My Profile</h3>
                    </div>
                    <div className="info">
                      <div className="manage">
                        <div className="left">
                          <div className="img_area">
                            <Image src={Imgzero}></Image>
                          </div>
                          <div className="person_info">
                            <h3>Charles</h3>
                            <p>Manage your personal information</p>
                          </div>
                        </div>
                        <div className="right">
                          
                            <button type="button" onClick={() => {router.push("/Dashboard/editprofile")}}>
                              Edit <FaRegEdit />
                            </button>
                          
                        </div>
                      </div>
                      <div className="personal_info">
                        <h3>Personal Information</h3>
                        <Row>
                          <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                            <div className="heading">First Name</div>
                            <div className="text">Charles</div>
                          </Col>
                          <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                            <div className="heading">Last Name</div>
                            <div className="text">Smith</div>
                          </Col>
                          <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                            <div className="heading">Email Address</div>
                            <div className="text">charlesmith@gmail.com</div>
                          </Col>
                          <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                            <div className="heading">Phone</div>
                            <div className="text">1234567756</div>
                          </Col>
                        </Row>
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
export default myprofile;
