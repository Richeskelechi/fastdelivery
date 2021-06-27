import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand>
            <LinkContainer to="/" style={{ color : '#fff' }}>
              <Nav.Link>Fast Delivery</Nav.Link>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/service">
                <Nav.Link>Service</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About us</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="mr-auto">
              <LinkContainer to="/contact">
                <Nav.Link>Contact us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/track">
                <Nav.Link>Click To Track Goods</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
