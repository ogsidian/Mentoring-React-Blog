import React from "react";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Cards from "./components/Cards";
import FullPostPage from "./pages/FullPostPage";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <HomePage />
        <Route exact path="/">
          <Cards />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/post/:id" component={FullPostPage} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
