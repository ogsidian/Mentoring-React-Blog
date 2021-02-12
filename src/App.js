import React from "react";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import FullPostPage from "./pages/FullPostPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/post/:id" component={FullPostPage} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
