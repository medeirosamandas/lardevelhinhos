import { SectionTransparencia, Container, Content } from "./style";
import HeaderTransparencia from "../../components/HeaderTransparencia";
import foto from "../../assets/pagtransparencia.jpg";
import { Link } from "react-router-dom";

const Transparencia = () => {
  return (
    <>
      <HeaderTransparencia />
      <SectionTransparencia>
        <Container>
          <Content>
            <p className="texto">
              Nós do Lar de Velhinhos Irmã Marieta, diretoria, funcionários e
              voluntários, nos sentimos honrados e agradecidos pela colaboração
              e apoio que temos recebido do município, câmara de vereadores,
              ministério público e população. Depois de diversas campanhas, o
              lar agora recebe sob forma de doações grande parte do que é
              necessário para subsistência dos idosos, ainda que não seja
              atingido o ideal. Sempre é necessário complementar com recursos
              que a instituição arrecada. Inúmeras despesas sempre superam o
              orçamento, que engloba: gás, energia elétrica, salários, encargos
              sociais, medicamentos, parte da alimentação (pão, leite, carnes),
              manutenção do lar e outras despesas que surgem no dia a dia. É
              importante frisar que as despesas sempre superam as receitas. Se
              não fosse o poder das generosas doações, a instituição não teria
              mais condições de funcionamento. Desta forma, o Lar de Velhinhos
              pede encarecidamente para a comunidade Cambuquirense, dentro das
              possibilidades de cada um, a contribuir com este grande serviço de
              relevância social prestado com a contribuição através dos carnês
              de doação da entidade, que podem ser obtidos e quitados na própria
              instituição, ou através de depósitos e transferências bancárias.
            </p>
            <div>
              <h5>Favorecido: Lar de Velhinhos Irmã Marieta</h5>
              <h5>CNPJ: 19.071.083/0001-38</h5>

              <h4>SICOOB</h4>
              <p>AG: 3180</p>
              <p>C/C: 34320-0</p>

              <h4>CAIXA ECONÔMICA FEDERAL</h4>

              <p>AG: 0101</p>
              <p>OP. 003</p>
              <p>C/C: 500062-2</p>
            </div>
            <Link to="/comodoar">
              CLIQUE AQUI PARA CONHECER MAIS OPÇÕES PARA DOAÇÃO
            </Link>
          </Content>
          <img src={foto} alt="Nossa interna" />
        </Container>
      </SectionTransparencia>
    </>
  );
};
export default Transparencia;
