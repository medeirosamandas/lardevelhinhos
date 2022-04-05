import { LogoHeader, NavHeader, PageHeader } from "./style";

const Header = () => {
  return (
    <PageHeader>
      <LogoHeader>
        <h1>Lar de Velhinhos Irmã Marieta</h1>
      </LogoHeader>
      <NavHeader>
        <ul>
          <li>Home</li>
          <li>Sobre nós</li>
          <li>Como doar</li>
          <li>Transparência</li>
          <li>Contato</li>
        </ul>
      </NavHeader>
    </PageHeader>
  );
};

export default Header;
