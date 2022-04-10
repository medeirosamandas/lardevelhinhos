import {
  SectionDoacao,
  FormasDoacoes,
  DestinoDoacoes,
  DivTiposDoacoes,
} from "./style";
import pagamento from "../../assets/payment.svg";
import fralda from "../../assets/fralda.svg";
import materiallimpeza from "../../assets/materiallimpeza.svg";
import carrinho from "../../assets/carrinho.svg";
import medicamento from "../../assets/medicamento.svg";
import transferencia from "../../assets/account_balance_wallet_black_24dp.svg";
import pix from "../../assets/pix_black_24dp.svg";
import instituicao from "../../assets/house_black_24dp.svg";

const ComoDoar = () => {
  return (
    <SectionDoacao>
      <FormasDoacoes>
        <h2>Como fazer uma doação</h2>
        <p>
          Você pode escolher a forma mais confortável para você. Toda doação é
          muito bem vinda e será recebida com muito amor e gratidão.
        </p>
        <DivTiposDoacoes>
          <div>
            <h3>
              Transferência Bancária
              <img src={transferencia} alt="transferencia" />
            </h3>
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
          <div>
            <h3>
              Pix
              <img src={pix} alt="pix" />
            </h3>

            <p>Chave: 19.071.083/0001-38</p>
          </div>
          <div>
            <h3>
              Doação em nosso endereço
              <img src={instituicao} alt="instituicao" />
            </h3>

            <p>
              Você pode fazer doação por meio do carnê, materiais de limpeza,
              fraldas, comidas, roupas, etc. direto em nossa instituição.
            </p>
            <br></br>
            <p>
              Av. João Thomáz de Liz, 182, Centro, Cambuquira/MG, CEP:
              37.420-000
            </p>
          </div>
        </DivTiposDoacoes>
      </FormasDoacoes>
      <DestinoDoacoes>
        <h2>Entenda o destino das doações que recebemos</h2>
        <p>
          Toda a quantia recebida dos nossos doadores é destinada à nossa
          instituição e totalmente revertida em suprimentos e recursos capazes
          de proporcionar melhores condições e qualidade de vida àqueles que
          dependem de nós.
        </p>
        <ul>
          <li>
            <img src={pagamento} alt="pagamento" />
            <p>Pagamento dos profissionais</p>
          </li>
          <li>
            <img src={carrinho} alt="" />
            <p>Compra de alimentos</p>
          </li>
          <li>
            <img src={medicamento} alt="" />
            <p>Reposição de medicamentos</p>
          </li>
          <li>
            <img src={fralda} alt="" />
            <p>Compra de fraldas</p>
          </li>
          <li>
            <img src={materiallimpeza} alt="" />
            <p>Compra de materiais de limpeza</p>
          </li>
        </ul>
      </DestinoDoacoes>
    </SectionDoacao>
  );
};

export default ComoDoar;
