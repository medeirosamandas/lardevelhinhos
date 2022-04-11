import styled from "styled-components";

export const NavTransparencia = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--rosaclaro);
  ul {
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  li {
    list-style-type: none;
  }
  li :hover {
    background-color: var(--rosa);
  }
  a {
    color: black;
    text-decoration: none;
    font-size: 1.2rem;
  }
`;
