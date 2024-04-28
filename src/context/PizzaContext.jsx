import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import DataPizzas from "../data/pizzas.json";

// Este es el contexto que se tiene que llamar en cualquier componente que quiera acceder a las pizzas (no olvidar)
export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  console.log(carrito);

  useEffect(() => {
    const loadPizzas = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setPizzas(DataPizzas);
    };

    loadPizzas();
  }, []);

  const agregarAlCarrito = (pizza) => {
    const itemEncontrado = carrito.find((item) => item.id === pizza.id);
    if (itemEncontrado) {
      // Si el item ya está en el carrito, podrías querer incrementar la cantidad
      const carritoActualizado = carrito.map((item) =>
        item.id === pizza.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCarrito(carritoActualizado);
    } else {
      // Si no está, lo añades al carrito con una cantidad inicial
      setCarrito([...carrito, { ...pizza, cantidad: 1 }]);
    }
  };

  const incrementarCantidad = (pizzaId) => {
    setCarrito(
      carrito.map((item) =>
        item.id === pizzaId ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const decrementarCantidad = (pizzaId) => {
    const item = carrito.find((item) => item.id === pizzaId);
    if (item.cantidad > 1) {
      setCarrito(
        carrito.map((item) =>
          item.id === pizzaId ? { ...item, cantidad: item.cantidad - 1 } : item
        )
      );
    }
  };

  const eliminarDelCarrito = (pizzaId) => {
    setCarrito(carrito.filter((item) => item.id !== pizzaId));
  };

  const calcularTotal = () => {
    return carrito.reduce(
      (total, item) => total + item.price * item.cantidad,
      0
    );
  };

  const totalCarrito = calcularTotal();

  return (
    <PizzaContext.Provider
      value={{
        carrito,
        pizzas,
        agregarAlCarrito,
        incrementarCantidad,
        decrementarCantidad,
        eliminarDelCarrito,
        totalCarrito,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

PizzaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PizzaProvider;
