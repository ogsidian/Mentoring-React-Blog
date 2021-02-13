import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Cards(props) {
  return (
    <Container>
      <Card className="mt-4">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>
            <Link to={`/articles/${props.id}`}>{props.title}</Link>
          </Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{props.data}</small>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default Cards;
