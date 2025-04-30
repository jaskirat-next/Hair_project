"use client";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import "../../../../public/sass/pages/terms.scss";

function faq() {
  return (
    <section className="main">
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="parent parent2">
              <h1>FAQs</h1>

              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What is this store about?</Accordion.Header>
                  <Accordion.Body>
                    We are an e-commerce site specializing in high-quality
                    artificial hair products. Our range includes wigs, hair
                    extensions, and accessories designed for cancer patients and
                    anyone looking for stylish, natural-looking hair solutions.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Who can use your products?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our products are suitable for everyone! Whether you're
                    undergoing medical treatments, experiencing hair loss, or
                    just looking to change your hairstyle, we have options that
                    fit your needs.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Do you offer a return policy?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, we offer a 30-day return policy. If you are not
                    satisfied with your purchase, you can return it within 30
                    days for a full refund. Please ensure the product is in its
                    original condition.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {" "}
                    How do I choose the right wig or hairpiece?
                  </Accordion.Header>
                  <Accordion.Body>
                    We recommend considering the style, length, and color that
                    best suits your needs. Our website provides detailed product
                    descriptions and a sizing guide to help you make an informed
                    choice. Feel free to contact our support team for
                    personalized advice.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What are the wigs made of?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our wigs are made from high-quality synthetic fibers that
                    closely resemble natural hair. We also offer options with
                    heat-resistant fibers for styling flexibility.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Can I style my wig?</Accordion.Header>
                  <Accordion.Body>
                    Yes, our heat-resistant wigs can be styled using low to
                    moderate heat tools like straighteners or curling irons.
                    Please check the product description for styling
                    instructions specific to each wig.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    How long does shipping take?
                  </Accordion.Header>
                  <Accordion.Body>
                    Shipping times depend on your location. Typically, domestic
                    orders arrive within 5-7 business days, while international
                    orders may take 10-15 business days. We provide tracking
                    information once the order is shipped.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Do you offer international shipping?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, we ship worldwide. Shipping rates and delivery times
                    vary depending on the destination. Please refer to our
                    Shipping Policy page for more details.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default faq;
