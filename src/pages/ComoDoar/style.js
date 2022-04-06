import styled from "styled-components";

export const SectionDoacao = styled.section`
  max-width: 1500px;
  margin: auto;
  padding: 2rem;
  text-align: center;
  h2 {
    margin: 1rem;
  }
`;
export const FormasDoacoes = styled.div`
  margin: 1rem;
`;
export const DivTiposDoacoes = styled.div`
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  h4 {
    font-weight: bold;
    margin: 1rem 0 0.3rem;
  }

  h3 {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
  }
  img {
    margin-left: 0.5rem;
  }
  div {
    text-align: center;
    width: 20%;
    margin: 1rem;
    padding: 1rem;
    border-radius: 2rem;
    box-shadow: 5px 5px 25px 5px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 800px) {
    div {
      width: 70%;
    }
  }
`;
export const DestinoDoacoes = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 5px 5px 25px 2px rgba(0, 0, 0, 0.5);
    margin: 1rem;
  }
  li img {
    width: 30px;
    margin-right: 0.5rem;
  }
`;
