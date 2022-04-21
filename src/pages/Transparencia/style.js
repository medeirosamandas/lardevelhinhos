import styled from "styled-components";

export const SectionTransparencia = styled.section`
  max-width: 1500px;
  margin: auto;
  padding: 0 2rem 2rem;
  text-align: center;
  h2 {
    margin: 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }

  img {
    height: 500px; /* height of container */
    object-fit: cover;
  }
`;

export const Content = styled.div`
  .texto {
    padding: 2rem;
    line-height: 1.5;
    text-align: justify;
    text-indent: 1.5em;
    width: 100%;
  }
  div {
    padding: 0 2rem 2rem;
  }
  a {
    background-color: var(--rosaclaro);
    color: black;
    text-decoration: none;
    padding: 1rem;
    border-radius: 10px;
  }
`;
