import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import { stateContext } from "./NavBar";

function AddArticleModal({ show, modalClose, onAddArticle }) {
  const value = React.useContext(stateContext);
  const [data, setData] = React.useState({
    title: "",
    text: "",
    image: "",
  });
  console.log(data);
  const changeInput = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onClickAdd = () => {
    if (onAddArticle) {
      onAddArticle(data);
    }
  };
  return (
    <Modal show={show} onHide={modalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Заголовок статьи</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Введите заголовок</Form.Label>
            <Form.Control
              type="text"
              placeholder="..."
              onChange={changeInput}
              name="title"
              value={data.title}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Ссылка на изображение</Form.Label>
            <Form.Control
              type="text"
              placeholder="https://image.png"
              name="image"
              onChange={changeInput}
              value={data.image}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="text"
              onChange={changeInput}
              value={data.text}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={modalClose}>
          Закрыть
        </Button>
        <Button variant="success" onClick={onClickAdd}>
          Сохранить и добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddArticleModal;
