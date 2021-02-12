import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import React from "react";
import {Modal} from "react-bootstrap";

function NavBar() {
    const [show, setShow] = React.useState(false)

    const modalClose = () => setShow(false)
    const modalOpen = () => setShow(true)


    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">Medium на стероидах</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About me</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-light">Поиск</Button>
                    <Button variant="outline-light" className="ml-2" onClick={modalOpen}>Добавить статью</Button>
                    <Modal show={show} onHide={modalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Заголовок статьи</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Введите заголовок</Form.Label>
                                    <Form.Control type="text" placeholder="..."/>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Ссылка на изображение</Form.Label>
                                    <Form.Control type="text" placeholder="https://image.png"/>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label></Form.Label>
                                    <Form.Control as="textarea" rows={5}/>
                                </Form.Group>
                            </Form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="danger" onClick={modalClose}>Close</Button>
                            <Button variant="success">Save changes</Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </Navbar>

        </>
    );
}

export default NavBar;
