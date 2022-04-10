import styled from "styled-components";

export const PageFooter = styled.footer`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ul {
    z-index: 100;
  }

  .custom-shape-divider-bottom-1649266048 {
    position: absolut;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: -20;
  }

  .custom-shape-divider-bottom-1649266048 svg {
    display: block;
    width: calc(300% + 1.3px);
    height: 288px;
  }

  .custom-shape-divider-bottom-1649266048 .shape-fill {
    fill: #f5a623;
  }

  /** For mobile devices **/
  @media (max-width: 767px) {
    .custom-shape-divider-bottom-1649266048 svg {
      width: calc(202% + 1.3px);
      height: 288px;
    }
  }
`;
