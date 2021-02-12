import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import React, { useReducer } from "react";
import AddArticleModal from "./AddArticleModal";

const initialState = {
  visible: false,
  article: [],
};
function reducer(state, action) {}

function NavBar() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const modalClose = () => setShow(false);
  const modalOpen = () => setShow(true);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Medium на стероидах</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/home">Home</Link>
          <Link to="/about">About me</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Поиск</Button>
          <Button variant="outline-light" className="ml-2" onClick={modalOpen}>
            Добавить статью
          </Button>
          <AddArticleModal show={state.show} modalClose={modalClose} />
        </Form>
      </Navbar>
    </>
  );
}

export default NavBar;
