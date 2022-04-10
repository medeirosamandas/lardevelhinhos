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
      <div class="custom-shape-divider-top-1649265306">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </PageHeader>
  );
};

export default Header;
