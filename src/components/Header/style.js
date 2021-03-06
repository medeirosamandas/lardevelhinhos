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
    padding: 0.5rem;
    margin-right: 1.5rem;
  }
  a {
    text-decoration: none;
    color: black;
  }
  li :hover {
    background-color: var(--rosaclaro);
    padding: 0.5rem;
    border-bottom: 2px var(--rosaclaro) solid;
    border-radius: 10px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 0.8rem;
  }
`;

export const PageHeader = styled.header`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--rosa);

  .custom-shape-divider-top-1649265306 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: -19;
}

.custom-shape-divider-top-1649265306 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 155px;
}

.custom-shape-divider-top-1649265306 .shape-fill {
    fill: var(--rosa);
}
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
