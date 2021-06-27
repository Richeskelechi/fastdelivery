import { Carousel } from "react-bootstrap";
import slider1 from '../assets/images/ban04.jpeg';
import slider2 from '../assets/images/pp2.jpeg';
import slider3 from '../assets/images/team22.jpeg';
function Slider() {
  return (
    <Carousel style={{ marginTop: '10px' }}>
      <Carousel.Item style={{'height':"500px"}}>
        <img style={{'height':"100%"}} className="d-block w-100" src={slider1} alt="First slide" />
        <Carousel.Caption>
          <h3>Both Local and Internation Delivery</h3>
          <p> Nulla vitae elit libero, a pharetra augue mollis interdum. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height':"500px"}}>
        <img style={{'height':"100%"}} className="d-block w-100" src={slider2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Speed of light is the only option</h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height':"500px"}}>
        <img style={{'height':"100%"}} className="d-block w-100" src={slider3} alt="Third slide" />
        <Carousel.Caption>
        <h3>Fast Delivery, More than you can bargain</h3>
          <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Slider;
