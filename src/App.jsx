import { Home } from "./views/Home";
import { Routes, Route } from "react-router-dom";
import { Detalle } from "./views/Detalle";
import { Hero } from "./components/Hero";
import { NavMenu } from "./components/NavMenu";
import { Footer } from "./components/Footer";
import { Carrito } from "./views/Carrito";

function App() {
  return (
    <>
      <NavMenu />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:pizzaId" element={<Detalle />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
