import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import './Card.css';

function CommanderCard() {
  const apiURL = "https://api.scryfall.com/cards/random?q=is%3Acommander";
  
  const [card, setCard] = useState("");

  useEffect(() => {
    axios.get(apiURL).then((reponse) => {
      setCard(reponse.data);
      console.log('axios')
    });
  }, []);

  if(card !== "") console.log(card.image_uris.normal)
  return card !== "" ? (
    <Card>
      <Card.Img className="CommanderArt" src={card.image_uris.art_crop} />
      <Card.Title className="Commander"><a target="_blank" href={card.scryfall_uri}><h1>{card.name}</h1></a></Card.Title>
      <Card.Subtitle className="Commander Title">{card.flavor_text}</Card.Subtitle>
      <Card.Text className="Commander Title">{card.mana_cost} - {card.type_line}</Card.Text>
      <Card.Text className="Commander Oracle Title">{card.oracle_text}</Card.Text>
    </Card>
  ) : (
    <p className="Commander Title">Chargement de la carte...</p>
  );
}

export default CommanderCard;
