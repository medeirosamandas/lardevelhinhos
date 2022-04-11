import { Link } from "react-router-dom";
import HeaderTransparencia from "../HeaderTransparencia";
import { Table, SectionTable } from "./style";
import { transparencia } from "./transparencia";

const DoisMileVinteeUm = () => {
  return (
    <>
      <HeaderTransparencia />
      <SectionTable>
        <Table>
          <thead>
            <tr>
              <th>Mês</th>
              <th>Receitas</th>
              <th>Despesas</th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="mes">Janeiro</td>
              <td>
                {transparencia.janeiro.receitas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {transparencia.janeiro.despesas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td className="negativo">
                {(
                  transparencia.janeiro.receitas -
                  transparencia.janeiro.despesas
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="mes">Fevereiro</td>
              <td>
                {transparencia.fevereiro.receitas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {transparencia.fevereiro.despesas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {(
                  transparencia.fevereiro.receitas -
                  transparencia.fevereiro.despesas
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="mes">Março</td>
              <td>
                {transparencia.marco.receitas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {transparencia.marco.despesas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td className="negativo">
                {(
                  transparencia.marco.receitas - transparencia.marco.despesas
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="mes">Abril</td>
              <td>
                {transparencia.abril.receitas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {transparencia.abril.despesas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {(
                  transparencia.abril.receitas - transparencia.abril.despesas
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="mes">Maio</td>
              <td>
                {transparencia.maio.receitas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {transparencia.maio.despesas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {(
                  transparencia.maio.receitas - transparencia.maio.despesas
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="mes">Junho</td>
              <td>
                {transparencia.junho.receitas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {transparencia.junho.despesas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {(
                  transparencia.junho.receitas - transparencia.junho.despesas
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="mes">Julho</td>
              <td>
                {transparencia.julho.receitas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {transparencia.julho.despesas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {(
                  transparencia.julho.receitas - transparencia.julho.despesas
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="mes">Agosto</td>
              <td>
                {transparencia.agosto.receitas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {transparencia.agosto.despesas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td className="negativo">
                {(
                  transparencia.agosto.receitas - transparencia.agosto.despesas
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="mes">Setembro</td>
              <td>
                {transparencia.setembro.receitas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {transparencia.setembro.despesas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td className="negativo">
                {(
                  transparencia.setembro.receitas -
                  transparencia.setembro.despesas
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="mes">Outubro</td>
              <td>
                {transparencia.outubro.receitas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {transparencia.outubro.despesas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td className="negativo">
                {(
                  transparencia.outubro.receitas -
                  transparencia.outubro.despesas
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="mes">Novembro</td>
              <td>
                {transparencia.novembro.receitas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {transparencia.novembro.despesas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td className="negativo">
                {(
                  transparencia.novembro.receitas -
                  transparencia.novembro.despesas
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
            <tr>
              <td className="mes">Dezembro</td>
              <td>
                {transparencia.dezembro.receitas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {transparencia.dezembro.despesas.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td className="negativo">
                {(
                  transparencia.dezembro.receitas -
                  transparencia.dezembro.despesas
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="mes">Total</td>
              <td>
                {(
                  transparencia.janeiro.receitas +
                  transparencia.fevereiro.receitas +
                  transparencia.marco.receitas +
                  transparencia.abril.receitas +
                  transparencia.maio.receitas +
                  transparencia.junho.receitas +
                  transparencia.julho.receitas +
                  transparencia.agosto.receitas +
                  transparencia.setembro.receitas +
                  transparencia.outubro.receitas +
                  transparencia.novembro.receitas +
                  transparencia.dezembro.receitas
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                {(
                  transparencia.janeiro.despesas +
                  transparencia.fevereiro.despesas +
                  transparencia.marco.despesas +
                  transparencia.abril.despesas +
                  transparencia.maio.despesas +
                  transparencia.junho.despesas +
                  transparencia.julho.despesas +
                  transparencia.agosto.despesas +
                  transparencia.setembro.despesas +
                  transparencia.outubro.despesas +
                  transparencia.novembro.despesas +
                  transparencia.dezembro.despesas
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td className="negativo">
                {(
                  transparencia.janeiro.receitas +
                  transparencia.fevereiro.receitas +
                  transparencia.marco.receitas +
                  transparencia.abril.receitas +
                  transparencia.maio.receitas +
                  transparencia.junho.receitas +
                  transparencia.julho.receitas +
                  transparencia.agosto.receitas +
                  transparencia.setembro.receitas +
                  transparencia.outubro.receitas +
                  transparencia.novembro.receitas +
                  transparencia.dezembro.receitas -
                  (transparencia.janeiro.despesas +
                    transparencia.fevereiro.despesas +
                    transparencia.marco.despesas +
                    transparencia.abril.despesas +
                    transparencia.maio.despesas +
                    transparencia.junho.despesas +
                    transparencia.julho.despesas +
                    transparencia.agosto.despesas +
                    transparencia.setembro.despesas +
                    transparencia.outubro.despesas +
                    transparencia.novembro.despesas +
                    transparencia.dezembro.despesas)
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          </tfoot>
        </Table>
        <br />
        <br />
        <Link to="/comodoar">
          CLIQUE AQUI PARA MAIS INFORMAÇÕES SOBRE COMO VOCÊ PODE NOS AJUDAR
        </Link>
      </SectionTable>
    </>
  );
};

export default DoisMileVinteeUm;
