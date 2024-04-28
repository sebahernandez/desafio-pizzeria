import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { formatter } from "../utils/Formatter";

export const NavMenu = () => {
  const { totalCarrito } = useContext(PizzaContext);

  const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav-link text-info" : "nav-link text-white";

  const priceFormatted = formatter.format(totalCarrito);
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="text-white">
          🍕 Pizzeria Mamma Mia!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className={getNavLinkClass}>
              Home
            </NavLink>
            <NavLink to="/carrito" className={getNavLinkClass}>
              Carrito ({priceFormatted})
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
