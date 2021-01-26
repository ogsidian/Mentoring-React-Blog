import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Cards(props) {
  return (
    <div>
      <CardColumns className="mt-4">
        <Card>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>
              <Link to={`/post/${props.id}`}>{props.title}</Link>
            </Card.Title>
            <Card.Text>{props.text}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{props.data}</small>
          </Card.Footer>
        </Card>
      </CardColumns>
    </div>
  );
}

export default Cards;
