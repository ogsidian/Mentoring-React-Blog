import React from "react";
import NavBar from "../components/NavBar";
import Cards from "../components/Cards";
import { CardColumns } from "react-bootstrap";

function HomePage() {
  const [cardData, setCardData] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://5c3755177820ff0014d92711.mockapi.io/articles`)
      .then((res) => res.json())
      .then((json) => setCardData(json));
  });

  return (
    <>
      <NavBar />
      <CardColumns>
        {cardData.map((obj) => (
          <Cards
            title={obj.title}
            image={obj.image}
            text={obj.text}
            id={obj.id}
          />
        ))}
        <Cards />
      </CardColumns>
    </>
  );
}

export default HomePage;
