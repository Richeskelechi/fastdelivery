import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import mode1 from "../assets/images/air.jpeg";
import mode2 from "../assets/images/lorry.jpeg";
import mode3 from "../assets/images/ship.jpeg";

function Mode() {
  return (
    <>
      <Container style={{ marginTop: "10px" }}>
        <Row>
          <Col xs={12} sm={6} md={6} ld={6} xl={6}>
            <Row>
              <Col className="center-shift" xs={12}>
                Information About Our Shippment
              </Col>
            </Row>
            <div>
              <Accordion>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Air Shippment
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Fast express delivery can handle all of your global
                      forwarding /shipping / logistics solutions
                      <img
                        src={mode1}
                        alt="Air Mode of shippment"
                        style={{ width: "100%" }}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Road / Lorry Shippment
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      fast express delivery is a superior and expert express
                      shipping company with cars and lorries in good condiction
                      to transport your goods
                      <img
                        src={mode2}
                        alt="Lorry Mode of shippment"
                        style={{ width: "100%" }}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    Sea Shipment
                  </Accordion.Toggle>

                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      Step-by-step we provide the details needed to ensure
                      expedient and profitable export transactions.
                      <img
                        src={mode3}
                        alt="Sea Mode of shippment"
                        style={{ width: "100%" }}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} ld={6} xl={6}>
            <Row>
              <Col className="center-shift" xs={12}>
                Interested in Our Services.
              </Col>
              <Card>
                <Card.Body>
                  Are you interested in all of our services. Do you want to
                  receive news about our products and services. You can be among
                  our first class customers to receive firsthand information.
                  hit the send vutton by providing us with your email.
                  <Form action='call' method='post'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Send me mails
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Mode;
