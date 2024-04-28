import { Card, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { formatter } from "../utils/Formatter";

export const ProductCard = ({ pizza }) => {
  const { agregarAlCarrito } = useContext(PizzaContext);

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(pizza);
  };

  const priceFormatted = formatter.format(pizza.price);
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={pizza.img} alt={`Pizza ${pizza.name}`} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>{pizza.desc}</Card.Text>
        <ListGroup variant="flush">
          {pizza.ingredients.map((ingredient, index) => (
            <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
          ))}
        </ListGroup>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <h3>{priceFormatted}</h3>
          <div>
            <Link
              className="btn btn-dark"
              to={`/pizza/${pizza.id}`}
              style={{ marginRight: "10px" }}
            >
              Ver Más
            </Link>
            <Button
              className="btn btn-success"
              onClick={handleAgregarAlCarrito}
            >
              Añadir al carrito
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

ProductCard.propTypes = {
  pizza: PropTypes.object.isRequired,
};
