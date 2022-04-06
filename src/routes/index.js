import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ComoDoar from "../pages/ComoDoar";
import Contato from "../pages/Contato";
import Transparencia from "../pages/Transparencia";
import About from "../pages/About";

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="contato" element={<Contato />}></Route>
      <Route path="comodoar" element={<ComoDoar />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="transparencia" element={<Transparencia />}></Route>
    </Routes>
  );
};

export default Routess;
