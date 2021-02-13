import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import React, { useReducer } from "react";
import AddArticleModal from "./AddArticleModal";
import axios from "axios";

const stateContext = React.createContext();
console.log(stateContext);

const initialState = {
  visibleModal: false,
  article: [],
};

const response = axios.post(
  `https://5c3755177820ff0014d92711.mockapi.io/articles`,
  initialState.article
);

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        visibleModal: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        visibleModal: false,
      };
    case "ADD_ARTICLE":
      return {
        ...state,
        article: [
          ...state.article,
          {
            id: Math.random().toString(36).substr(2, 6),
            title: "hello",
            text: "hello",
            image:
              "https://miro.medium.com/max/638/1*5xibjPegHeQ1VXpqKUT_Pg.jpeg",
          },
        ],
      };
    default:
      return state;
  }
}

function NavBar() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const modalClose = () => {
    dispatch({
      type: "CLOSE_MODAL",
    });
  };
  const modalOpen = () => {
    dispatch({
      type: "OPEN_MODAL",
    });
  };

  const onAddArticle = () => {
    dispatch({
      type: "ADD_ARTICLE",
    });
    dispatch({
      type: "CLOSE_MODAL",
    });
  };

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
          <AddArticleModal
            show={state.visibleModal}
            modalClose={modalClose}
            onAddArticle={onAddArticle}
          />
        </Form>
      </Navbar>
    </>
  );
}

export default NavBar;
