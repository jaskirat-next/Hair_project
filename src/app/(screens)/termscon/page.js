import { Col, Container, Row } from "react-bootstrap";
import "../../../../public/sass/pages/terms.scss";
function terms() {
  return (
    <section className="main">
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="parent">
              <h1 className="align">Terms & Conditions</h1>
              <h6>Acceptance of Terms </h6>
              <p>
                By using this website, you confirm that you have read,
                understood, and accepted these Terms and Conditions, as well as
                our Privacy Policy. These terms apply to all visitors, users,
                and others who access or use our site.{" "}
              </p>
              <h6>Use of the Website </h6>
              <p>
                You agree to use our website solely for lawful purposes and in a
                manner that does not infringe on the rights of others. You must
                not misuse our website by introducing viruses, malware, or other
                harmful material. Any attempt to gain unauthorized access to our
                website, servers, or databases is strictly prohibited. We
                reserve the right to restrict access to our services if we
                suspect misuse or violation of our terms.{" "}
              </p>
              <h6>Product Information and Availability</h6>
              <p>
                We strive to provide accurate and up-to-date information
                regarding the products we sell, including descriptions, prices,
                and availability. However, we do not guarantee that the product
                descriptions or other content on our website are error-free,
                complete, or current. We reserve the right to correct any
                errors, inaccuracies, or omissions and to update product
                information at any time without prior notice. Product
                availability is subject to change, and we may limit the
                quantities available for purchase.{" "}
              </p>
              <h6>Orders and Payment </h6>
              <p>
                When you place an order on our website, you agree to provide
                accurate and complete information. We reserve the right to
                refuse or cancel any order for any reason, including but not
                limited to product unavailability, errors in pricing, or
                suspicion of fraudulent activity. If we cancel your order, we
                will notify you and issue a refund if payment has already been
                processed. All prices are listed in [Currency], and you are
                responsible for paying any applicable taxes or fees. We accept
                payment through various secure methods, including credit cards,
                debit cards, and PayPal.{" "}
              </p>
              <h6>Shipping and Delivery</h6>
              <p>
                We aim to deliver your order within the estimated timeframe
                provided during checkout. However, we do not guarantee delivery
                dates, as they may be subject to delays beyond our control.
                Shipping costs and delivery times vary depending on your
                location and the selected shipping method. You are responsible
                for providing an accurate shipping address, and we are not
                liable for lost or delayed shipments due to incorrect or
                incomplete address information.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default terms;
