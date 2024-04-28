import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { ProductCard } from "../components/ProductCard";

export const Home = () => {
  const { pizzas } = useContext(PizzaContext);

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-sm-12 col-md-6 col-lg-4">
              <ProductCard pizza={pizza} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
