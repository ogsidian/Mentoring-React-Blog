import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NavBar() {
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
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}

export default NavBar;
