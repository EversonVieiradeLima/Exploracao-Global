import React from "react";
import Accordion from 'react-bootstrap/Accordion';

import "./style.css";

export default function Duvidas() {
  return (
    <div className="containerDuvidas">
      <h2 className="titleDuvidas">Dúvidas Frequentes</h2>
      <Accordion className="accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Quero cancelar a compra do meu pacote. O que preciso saber?
          </Accordion.Header>
          <Accordion.Body>
            <p>O cancelamento voluntário do seu pacote pode acarretar a cobrança de multa, seguindo as motivações da desistência da viagem e as regras do produto. Veja abaixo:</p>
            <ul>
              <li><b>Cancelamento até 24h da emissão e com embarque superior a 7 dias</b>: Não há cobrança de multa para os bilhetes aéreos e o valor pago será 100% devolvido. Será necessário consultar as condições de cancelamento da reserva de hotel no pacote.</li>

              <li><b>Cancelamento até 24h da emissão e com embarque inferior a 7 dias</b>: Poderá ocorrer cobrança de multas em seus bilhetes aéreos, a depender da classe tarifária dos mesmos. Será necessário consultar as condições de cancelamento da reserva de hotel no pacote.</li>

              <li><b>Cancelamento após o no-show (não comparecimento)</b>: Cobrança de multa de 100% do valor pago, com os serviços considerados utilizados.</li>
            </ul>
            ...
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Preciso imprimir minha passagem aérea para apresentar no embarque?
          </Accordion.Header>
          <Accordion.Body>
            <p>Para embarcar não é necessário apresentar o bilhete impresso. Basta apresentar o cartão de embarque que foi enviado para você ao realizar o check-in pela tela do celular, juntamente ao documento que será utilizado para embarque.</p>

            <p>O seu cartão de embarque digital com os dados de viagem também fica disponível no site da companhia aérea responsável pelo voo, aplicativo ou totens de autoatendimento.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Consigo realizar uma remarcação do meu voo ou da minha hospedagem?
          </Accordion.Header>
          <Accordion.Body>
            <p>As solicitações de remarcação dependem da disponibilidade e das regras dos fornecedores, levando em consideração o produto adquirido, devendo serem realizadas com a antecedência mínima de 60 dias em relação à data de embarque.</p>

            <p>E para verificarmos se a sua solicitação é elegível para remarcação, precisaremos analisar as características da sua compra. Por isso, preencha o nosso Formulário de ajuda (<a href="/ a">clique aqui</a>), informando o código do pedido ou localizador, além do e-mail ou CPF do pagante.</p>

            <p>Após isso, solicitamos que aguarde a resposta no e-mail cadastrado, que será enviada o mais breve possível.</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Como solicito a nota fiscal da minha reserva de hotel?
          </Accordion.Header>
          <Accordion.Body>
            <p>Você solicita a Nota Fiscal da sua hospedagem por meio do nosso Formulário de Ajuda (<a href="/">clique aqui</a>), informando o código do pedido ou localizador, além do E-mail ou CPF do pagante. </p>

            <p>Após recebermos o seu contato, pedimos que aguarde a resposta no e-mail cadastrado, que será enviada o mais breve possível.</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}