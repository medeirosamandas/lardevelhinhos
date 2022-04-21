import styled from "styled-components";

export const PageFooter = styled.footer`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--rosa);
  flex-wrap: wrap;
  ul {
    z-index: 100;
  }
  h1 {
    font-size: 1.3rem;
    width: 100%;
  }
  li {
    list-style-type: none;
  }
`;
