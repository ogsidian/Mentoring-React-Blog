import React from "react";
import NavBar from "../components/NavBar";
import Cards from "../components/Cards";
import FullPostPage from "./FullPostPage";

function HomePage() {
  const [cardData, setCardData] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://5c3755177820ff0014d92711.mockapi.io/posts`)
      .then((res) => res.json())
      .then((json) => setCardData(json));
  });

  return (
    <>
      <NavBar />
      {cardData.map((obj) => (
        <Cards
          title={obj.title}
          image={obj.image}
          text={obj.text}
          id={obj.id}
        />
      ))}
      <Cards />
    </>
  );
}

export default HomePage;
