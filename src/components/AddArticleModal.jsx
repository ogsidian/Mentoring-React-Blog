import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";

function AddArticleModal({ show, modalClose }) {
  return (
    <Modal show={show} onHide={modalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Заголовок статьи</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Введите заголовок</Form.Label>
            <Form.Control type="text" placeholder="..." />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Ссылка на изображение</Form.Label>
            <Form.Control type="text" placeholder="https://image.png" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={modalClose}>
          Close
        </Button>
        <Button variant="success">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddArticleModal;
