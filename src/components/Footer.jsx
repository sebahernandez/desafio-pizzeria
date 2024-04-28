import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer bg-dark text-light p-5">
      <Container>
        <Row>
          <Col sm={12} className="text-center mt-3">
            <p>
              &copy; {new Date().getFullYear()} Pizzería Mamma Mia. Todos los
              derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
