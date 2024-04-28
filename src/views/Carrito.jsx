import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { Container, Row, Col, ListGroup, Button, Image } from "react-bootstrap";
import { formatter } from "../utils/Formatter";

export const Carrito = () => {
  const {
    carrito,
    incrementarCantidad,
    decrementarCantidad,
    eliminarDelCarrito,
    totalCarrito,
  } = useContext(PizzaContext);

  if (!carrito || carrito.length === 0) {
    return (
      <Container>
        <div className="my-10" style={{ height: "100vh" }}>
          <h1>Carrito de Compras</h1>
          <p>Tu carrito está vacío.</p>
        </div>
      </Container>
    );
  }

  const totalCarritoFormatted = formatter.format(totalCarrito);

  return (
    <Container>
      <h1 className="my-10">Carrito de Compras</h1>
      <ListGroup className="my-5">
        {carrito.map((item) => (
          <ListGroup.Item key={item.id}>
            <Row className="align-items-center ">
              <Col md={2}>
                <Image src={item.img} alt={item.name} fluid rounded />
              </Col>
              <Col md={4}>
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
              </Col>
              <Col md={2}>
                <p>{formatter.format(item.price)}</p>
              </Col>
              <Col md={4}>
                <Button
                  variant="info"
                  onClick={() => decrementarCantidad(item.id)}
                >
                  -
                </Button>{" "}
                {item.cantidad}{" "}
                <Button
                  variant="info"
                  onClick={() => incrementarCantidad(item.id)}
                >
                  +
                </Button>
              </Col>
            </Row>
            <Button
              variant="danger"
              onClick={() => eliminarDelCarrito(item.id)}
              style={{ marginTop: "10px" }}
            >
              Eliminar del carrito
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="d-flex justify-content-center my-3 bg-dark py-2 text-white total-carrito">
        <div>
          <strong>Total en Carrito:</strong> {totalCarritoFormatted}
        </div>
      </div>
    </Container>
  );
};
