import { Link } from "react-router-dom";
import { NavTransparencia } from "./style.js";

const HeaderTransparencia = () => {
  return (
    <NavTransparencia>
      <ul>
        <li>
          <Link to="/transparencia/2022">2022</Link>
        </li>{" "}
        <li>
          <Link to="/transparencia/2021">2021</Link>
        </li>
        <li>
          <Link to="/transparencia">Voltar</Link>
        </li>
      </ul>
    </NavTransparencia>
  );
};
export default HeaderTransparencia;
