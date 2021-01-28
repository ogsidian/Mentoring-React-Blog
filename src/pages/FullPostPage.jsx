import NavBar from "../components/NavBar";
import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

function FullPostPage(props) {
  const [post, setPost] = React.useState();
  const postid = props.match.params.id;

  React.useEffect(() => {
    async function fetchPost() {
      const { data } = await axios.get(
        "https://5c3755177820ff0014d92711.mockapi.io/posts/" + postid
      );
      setPost(data);
    }
    fetchPost();
  });
  if (!post) {
    return <h1>Загрузка...</h1>;
  }

  return (
    <>
      <NavBar />
      <a href="/">
        <br />
        <Button>НАЗАД!</Button>
      </a>
      <Card>
        <Card.Img variant="top" src={post.image} />
        <Card.Body>
          <Card.Title>
            <Link to={`/post/${props.match.params.id}`}>{post.title}</Link>
          </Card.Title>
          <Card.Text>{post.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{post.data}</small>
        </Card.Footer>
      </Card>
    </>
  );
}

export default FullPostPage;
