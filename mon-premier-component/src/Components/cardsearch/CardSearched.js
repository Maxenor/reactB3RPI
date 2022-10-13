import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import '../Dashboard/Card.css';

function CardSearched(props) {
  console.log(props.isClicked)
  const apiURL = "https://api.scryfall.com/cards/random?q="
  if (props.isClicked) {
    const apiURL = "https://api.scryfall.com/cards/random?q=t:"+props.enteredCardType;
  } else {
    const apiURL = "https://api.scryfall.com/cards/random?q="
  }
  
  const [card, setCard] = useState("");
  console.log(apiURL)
  console.log(props.enteredCardType)
  useEffect(() => {
    axios.get(apiURL).then((reponse) => {
      setCard(reponse.data);
    });
  }, []);
  return card !== "" ? (
    <Card className="CommanderCard">
      <Card.Img className="CommanderArt" src={card.image_uris.art_crop} />
      <Card.Title className="Commander"><a target="_blank" rel="noreferrer" href={card.scryfall_uri}><h1>{card.name}</h1></a></Card.Title>
      <Card.Subtitle className="Commander Title">{card.flavor_text}</Card.Subtitle>
      <Card.Text className="Commander Title">{card.mana_cost} - {card.type_line}</Card.Text>
      <Card.Text className="Commander Oracle Title">{card.oracle_text}</Card.Text>
    </Card>
  ) : (
    <p className="Commander Title">Pas de carte cherchée...</p>
  );
}

export default CardSearched;
