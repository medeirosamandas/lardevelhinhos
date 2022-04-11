import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ComoDoar from "../pages/ComoDoar";
import Contato from "../pages/Contato";
import Transparencia from "../pages/Transparencia";
import About from "../pages/About";
import DoisMileVinteeUm from "../components/2021";
import DoisMileVinteeDois from "../components/2022";

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route element={<Home />}></Route>
      <Route path="contato" element={<Contato />}></Route>
      <Route path="comodoar" element={<ComoDoar />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route exact path="transparencia" element={<Transparencia />}></Route>
      <Route
        exact
        path="transparencia/2021"
        element={<DoisMileVinteeUm />}
      ></Route>
      <Route
        exact
        path="transparencia/2022"
        element={<DoisMileVinteeDois />}
      ></Route>
    </Routes>
  );
};

export default Routess;
