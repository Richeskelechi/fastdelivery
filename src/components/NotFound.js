import Header from "./Header";
import { Container, Row, Col } from "react-bootstrap";
function NotFound() {
  return (
    <>
      <Header />
      <Container fluid style={{ width: '100%', height : '100vh', backgroundColor: '#95c2de' }}>
        <Row>
          <Col xs={12}>
            <div class="mainbox">
              <div className='err'>4<i className='far fa-question-circle fa-spin'></i>4</div>
              <div className='msg'>
                Maybe this page moved? Got deleted? Is hiding out in quarantine?
                Never existed in the first place?
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default NotFound;
