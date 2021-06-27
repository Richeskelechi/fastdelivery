import { Container, Row, Col, Card } from "react-bootstrap";
import card1 from '../assets/images/gal4.jpeg'
import card2 from '../assets/images/gal5.jpeg'
import card3 from '../assets/images/gal6.jpeg'

function SubImage() {
  return (
    <>
      <Container style={{ marginTop : '10px' }}>
        <Row>
          <Col xs={12} sm={6} md={4} style={{ marginBottom : '5px' }}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={card1} />
              <Card.Body>
                <Card.Title>Fast Delivery</Card.Title>
                <Card.Text>
                  Every good keep under our care is good to the core. 
                  No damage or injury till the packages gets to its destination.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} style={{ marginBottom : '5px' }}>
              <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={card2} />
              <Card.Body>
                <Card.Title>Fast Delivery</Card.Title>
                <Card.Text>
                  Number 1 delivery company around the world.
                  fastness is our watch word and we are keen to making our customers happy.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} style={{ marginBottom : '5px' }}>
              <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={card3} />
              <Card.Body>
                <Card.Title>Fast Delivery</Card.Title>
                <Card.Text>
                  The delivery comapny you can trust. Contact us any day.
                  World wide delivery with low cost. Use us to your full happiness.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default SubImage;
