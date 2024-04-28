import { Container, Row, Col } from "react-bootstrap";
import backgroundImage from "../assets/img/bg-pizza.jpg";

export const Hero = () => {
  return (
    <div
      className="hero-banner text-white text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        padding: "100px 0",
        backgroundPosition: "center bottom",
      }}
    >
      <Container>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <h1>¡Pizzería Mamma Mia!</h1>
            <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
