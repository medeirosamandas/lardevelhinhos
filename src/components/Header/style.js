import styled from "styled-components";

export const LogoHeader = styled.div`
  width: 30%;
  text-align: center;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const NavHeader = styled.nav`
  width: 60%;

  @media (max-width: 800px) {
    width: 100%;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  li {
    list-style-type: none;
    text-align: center;
    margin-right: 1.5rem;
    cursor: pointer;

    @media (max-width: 800px) {
      flex-direction: column;
      margin-top: 0.8rem;
    }
  }
`;

export const PageHeader = styled.header`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
