import { Container, Col, Row } from "react-bootstrap";
function Response() {
  return (
    <Container fluid>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row style={{ backgroundColor: "red" }}>
        <Col xs={12} sm={6} md={8}>
          xs=12 md=8 sm=6
        </Col>
        <Col xs={6} sm={6} md={4}>
          xs=6 md=4 sm=6
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row style={{ backgroundColor: "green" }}>
        <Col xs={6} md={4} sm={12}>
          xs=6 md=4 sm=12
        </Col>
        <Col xs={6} md={4} sm={12}>
          xs=6 md=4 sm=12
        </Col>
        <Col xs={6} md={4} sm={12}>
          xs=6 md=4 sm=12
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row style={{ backgroundColor: "orange" }}>
        <Col xs={6}>xs=6</Col>
        <Col xs={6}>xs=6</Col>
      </Row>
      {/* For offsetting grid columns you can set an offset value or for a more general layout, use the margin class utilities */}
      <Row style={{ backgroundColor: "yellow" }}>
        <Col md={4}>md=4</Col>
        <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
      </Row>
      <Row style={{ backgroundColor: "pink" }}>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
      </Row>
      <Row style={{ backgroundColor: "brown" }}>
        <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
        <Col md={3}>md=3</Col>
      </Row>
    </Container>
  );
}
export default Response;
