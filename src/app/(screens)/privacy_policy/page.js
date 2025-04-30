import { Col, Container, Row } from "react-bootstrap";
import "../../../../public/sass/pages/terms.scss";

function Privacy() {
  return (
    <section className="main">
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="parent">
              <h1 className="align">Privacy Policy</h1>
              <h6> Information We Collect</h6>

              <p>
                This Privacy Policy outlines how we collect, use, share, and
                protect your personal information when you interact with our
                e-commerce site. When you visit our website, register an
                account, make a purchase, or engage with our services, we may
                collect various types of information. This includes personal
                details like your name, email address, phone number, shipping
                address, billing address, and payment information{" "}
              </p>
              <h6>How We Use Your Information </h6>
              <p>
                We use the collected information to process and fulfill your
                orders, communicate with you regarding updates or promotions,
                and personalize your shopping experience. Additionally, this
                data helps us improve our website, products, and services.{" "}
              </p>
              <h6> Sharing Your Information</h6>
              <p>
                Cookies play a significant role in enhancing your browsing
                experience on our site. These small files, stored on your
                device, help us recognize your preferences, analyze site usage,
                and display relevant advertisements. We use different types of
                cookies, including essential ones necessary for the website's
                basic functionality, performance cookies to analyze site usage,
                and marketing cookies for personalized advertising. You have
                control over your cookie preferences and can manage them through
                your browser settings, although disabling cookies may impact
                your experience on our site.{" "}
              </p>
              <h6>Nterdum lorem ipsum sit </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum suscipit quam non eleifend ornare. Nullam porta
                volutpat facilisis. Mauris vehicula nisl eget elit aliquet, id
                dapibus odio iaculis. Duis id consectetur mi. Vivamus aliquam
                lorem lacus, ac molestie sapien sagittis eget. Cras eget
                elementum ligula. Donec efficitur quam ut tortor pretium
                molestie. Fusce velit purus, cursus at risus non, laoreet tempus
                diam. Fusce vitae pretium lacus, ac malesuada nisi. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit
                quam non eleifend ornare. Nullam porta volutpat facilisis.{" "}
              </p>
              <h6>Cookies and Tracking Technologies</h6>
              <p>
                To protect your personal information, we implement robust
                security measures, including secure payment processing, SSL
                encryption for data transmission, and regular monitoring of our
                practices. You also have rights regarding your personal
                information, such as the ability to request access to,
                correction of, or deletion of your data. Additionally, you can
                opt out of promotional communications by following the
                unsubscribe instructions provided in our emails or contacting us
                directly.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Privacy;
