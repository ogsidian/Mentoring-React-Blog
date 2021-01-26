import React from 'react';
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import {BrowserRouter, Route} from 'react-router-dom'
import {Container} from "react-bootstrap";
import Cards from "./components/Cards";
import FullPostPage from './pages/FullPostPage';

function App() {
  return (
      <Container>
    <BrowserRouter>
    <HomePage />
      <Route path="/about" component={AboutPage} />
      <Route path="/post/:id" component={FullPostPage} />
      <Route path="/" exact component={Cards} />
    </BrowserRouter>
      </Container>
    );
}

export default App;
