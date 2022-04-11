import { Link } from "react-router-dom";
import { LogoHeader, NavHeader, PageHeader } from "./style";

const Header = () => {
  return (
    <PageHeader>
      <LogoHeader>
        <h1>Lar de Velhinhos Irmã Marieta</h1>
      </LogoHeader>
      <NavHeader>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre nós</Link>
          </li>
          <li>
            <Link to="/comodoar">Como doar</Link>
          </li>
          <li>
            <Link to="/transparencia">Transparência</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </NavHeader>
    </PageHeader>
  );
};

export default Header;
