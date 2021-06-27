import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
function Footer() {
  return (
    <div class="container-fluid pb-0 mb-0 justify-content-center text-dark footerMain">
      <footer>
        <div class="row my-5 justify-content-center py-5">
          <div class="col-11">
            <div class="row ">
              <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                <h3 class="text-muted mb-md-0 mb-5 bold-text h3-text">
                  Fast Delivery.
                </h3>
              </div>
              <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 class="mb-3 mb-lg-4 bold-text ">
                  <b>MENU</b>
                </h6>
                <ul class="list-unstyled">
                  <LinkContainer to="/" style={{ color: "#000", marginLeft: '-11px' }}>
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about" style={{ color: "#000", marginLeft: '-11px' }}>
                    <Nav.Link>About us</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact" style={{ color: "#000", marginLeft: '-11px' }}>
                    <Nav.Link>Contact us</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/service" style={{ color: "#000", marginLeft: '-11px' }}>
                    <Nav.Link>Services</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/track" style={{ color: "#000", marginLeft: '-11px' }}>
                    <Nav.Link>Track</Nav.Link>
                  </LinkContainer>
                </ul>
              </div>
              <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                  <b>ADDRESS</b>
                </h6>
                <p class="mb-1">Asajon way, Sangotedo Lagos</p>
              </div>
            </div>
            <div class="row ">
              <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                <p class="social text-muted mb-0 pb-0 bold-text">
                  <span class="mx-2">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </span>
                  <span class="mx-2">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </span>
                  <span class="mx-2">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </span>
                  <span class="mx-2">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </span>
                </p>
                <small class="rights">
                  <span>&#174;</span> Fast Delivery All Rights Reserved.
                </small>
              </div>
              <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                <h6 class="mt-55 mt-2 text-muted bold-text">
                  <b>Ohanu Riches Kelechi</b>
                </h6>
                <small>
                  {" "}
                  <span>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </span>{" "}
                  richeskelechi94.rk@gmail.com
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
