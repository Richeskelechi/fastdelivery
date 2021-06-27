import Header from "./Header";
import { Container, Row, Col, Figure, ProgressBar } from "react-bootstrap";
import about from "../assets/images/about.jpeg";
import Footer from './Footer';
function About() {
  return (
    <>
      <Header />
      <Container fluid style={{ width: "100%", margin: "0", padding: "0" }}>
        <Row>
          <Col xs={12}>
            <Figure>
              <Figure.Image
                style={{ width: "100%", height: "600px" }}
                alt="About Us"
                src={about}
              />
              <Figure.Caption className="figureText d-none d-sm-block">
                Fast Delivery offer a diverse range of transportation services
                from project cargo to international transportation and domestic
                retail distribution and delivery.
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "60px" }}>
        <Row>
          <Col xs={12} sm={6} md={6}>
            <h2 className="aboutHead">Fast Delivery</h2>
            <p className="aboutHead1">The One you can trust</p>
            <h1 className="aboutHead2">Logistics Solutions</h1>
            <p className="aboutHead3">Imports – Air, Ocean, Land or Rails</p>
          </Col>
          <Col xs={12} sm={5} md={5} className="choseMe">
            <h2 className="choose1">Why Choose us</h2>
            <div>
              <span>SAFE DELIVERY</span>
              <ProgressBar animated striped variant="success" now={95} />
            </div>
            <div>
              <span>SUPPORT</span>
              <ProgressBar animated striped variant="success" now={100} />
            </div>
            <div>
              <span>FAST & ON TIME</span>
              <ProgressBar animated striped variant="success" now={90} />
            </div>
          </Col>
        </Row>
        <Row className='aboutIcons'>
          <Col xs={12} sm={6} md={3}>
            <div>
              <i className='fa fa-globe'></i>
              <p>4245</p>
              <p>PROJECTS DONE</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div>
              <i className='fa fa-users'></i>
              <p>4165</p>
              <p>HAPPY CLIENTS</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div>
              <i className='fa fa-handshake'></i>
              <p>1620</p>
              <p>TEAM WORKERS</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <div>
              <i className='fa fa-trophy'></i>
              <p>22</p>
              <p>YEARS IN MARKET</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default About;
