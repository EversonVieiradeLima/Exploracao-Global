import React from "react";
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "./style.css";
import logo from "../../Images/Logo/logo.png"

export default function Janela() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    // Aqui você pode fazer qualquer ação com o e-mail, como enviar para um servidor
    console.log(email);
    setEmail(''); // Limpa o campo de entrada após o envio
    handleClose(); // Fecha o modal após o envio
  };

  useEffect(() => {
    // Chama a função handleShow quando o componente é montado
    handleShow();
  }, []); // O array vazio garante que isso só seja executado uma vez, no momento da montagem

  return (
    <>
      <Modal show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      className="modal"
      centered>
        <Modal.Header closeButton className="headerModal">
          
          <Modal.Title className="titleModal">
            <img src={logo} alt="Logo Exploração Global" className="logoModal" />
            Exploração Global
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bodyModal">
          <Modal.Title>Cadastre-se em nossa Newsletter</Modal.Title>
          Queremos ficar em contato com você. Cadastre-se para receber nossos informativos.
        </Modal.Body>
        <Modal.Footer className="footerModal">
          <Form className="formModal" onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3 boxInputModal" controlId="formBasicEmail">
              <Form.Control
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              className="inputModal"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="buttonCadastrarModal">Cadastrar</Button>
          </Form>
        </Modal.Footer>
      </Modal>
    </>
  );
}