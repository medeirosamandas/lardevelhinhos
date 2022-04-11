import styled from "styled-components";

export const Table = styled.table`
  text-align: center;
  margin: auto;

  td,
  tr,
  tfoot,
  tbody,
  theader,
  th {
    margin: 0;
  }

  td {
    padding: 0.3rem;
  }

  .negativo {
    color: red;
  }
  thead {
    background-color: var(--rosa);
  }
  th {
    font-size: 1.2rem;
  }
  .mes {
    background-color: var(--rosaclaro);
  }
`;

export const SectionTable = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 2rem;
  a {
    background-color: var(--rosa);
    color: white;
    text-decoration: none;
    padding: 1rem;
    border-radius: 10px;
  }
`;