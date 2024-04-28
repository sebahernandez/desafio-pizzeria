import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { Row, Col } from "react-bootstrap";
import { formatter } from "../utils/Formatter";

export const Detalle = () => {
  const { pizzaId } = useParams();
  const { pizzas } = useContext(PizzaContext);
  const pizza = pizzas.find((p) => p.id === pizzaId);
  const navigate = useNavigate();
  const { agregarAlCarrito } = useContext(PizzaContext);

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(pizza);
  };

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }
  const priceFormatted = formatter.format(pizza.price);

  return (
    <div className="container py-5">
      <Row>
        <Col md={6}>
          <img src={pizza.img} alt={pizza.name} className="img-fluid" />
        </Col>
        <Col md={6}>
          <h2>{pizza.name}</h2>
          <p>{pizza.desc}</p>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p className="fw-bold">Precio: {priceFormatted}</p>
          <button
            className="btn btn-success"
            onClick={handleAgregarAlCarrito}
            style={{ marginRight: "5px" }}
          >
            Añadir al carrito
          </button>
          <button onClick={() => navigate("/")} className="btn btn-secondary">
            Volver
          </button>
        </Col>
      </Row>
    </div>
  );
};
