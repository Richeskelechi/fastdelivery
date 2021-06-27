import Header from "./Header";
import { Container, Row, Col, Figure, Card } from "react-bootstrap";
import service from "../assets/images/service.jpeg";
import Footer from './Footer';
function Service() {
  return (
    <>
      <Header />
      <Container
        className="d-none d-sm-block"
        fluid
        style={{ width: "100%", margin: "0", padding: "0" }}
      >
        <Row>
          <Col xs={12}>
            <Figure>
              <Figure.Image
                style={{ width: "100%", height: "600px" }}
                alt="About Us"
                src={service}
              />
              <Figure.Caption className="figureText d-none d-sm-block">
                Fast And Safe Transport Service Specialized Heavy-Duty Vehicles
                Shipping Services & Logistics Management
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
      <Container
        className="d-block d-sm-none"
        fluid
        style={{ width: "100%", margin: "0", padding: "0" }}
      >
        <Row>
          <Col xs={12}>
            <Figure>
              <Figure.Image
                style={{ width: "100%", height: "300px" }}
                alt="About Us"
                src={service}
              />
            </Figure>
          </Col>
        </Row>
      </Container>
      <Container
        style={{ marginTop: "60px" }}
        className="serviceHead text-light"
      >
        <Row>
          <Col xs={12} sm={6} md={4}>
            <h4>AIRWAYS TRANSPORT</h4>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <p>
                  Our services extends to the use of aircraft in moving our
                  goods from one country to another. This Airways transport of
                  corelEX has helped in the growth of the company
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <h4>ROADWAYS TRANSPORT</h4>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <p>
                  The road transport of fast delivery Services is superior and
                  second to none. The Road Transport allows us to move our goods
                  from one state to another easily and without stress
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <h4>WATERWAYS TRANSPORT</h4>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <p>
                  For those countries surronded by sea or ocean and those
                  countries that needs ship for transport. corelEX Courier
                  Services has solved all problems for you. Contact us on how to
                  get started.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <h4>LOGISTIC MANAGEMENT</h4>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <p>
                  The Payment Made at corelEX Courier Services is limited and
                  affordable. Different payment platform can be used to make the
                  desired payment. corelEX management will bear the gross of an
                  leson missed.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <h4>DELIVERY UNLIMITED</h4>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <p>
                  Our Delivery is unlimited. Ranging from relatively small goods
                  to medium sized goods up to a big one. We live up to our
                  clients expectations
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <h4>FAST & SAFE SERVICE</h4>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <p>
                  Our Services is the fastest when it comes to delivery. Not
                  more than 96hours from the hours of booking to the time of
                  reaching and sending the goods to our client. we are fast and
                  steady.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Service;
