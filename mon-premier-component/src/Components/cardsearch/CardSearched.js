import { Card } from "react-bootstrap";
import '../Dashboard/Card.css';

function CardSearched(props) {
  console.log(props.cardFound)
  return props.cardFound !== "" ? (
    <Card className="CommanderCard">
      <Card.Img className="CommanderArt" src={props.cardFound.card.image_uris.art_crop} />
      <Card.Title className="Commander"><a target="_blank" rel="noreferrer" href={props.cardFound.card.scryfall_uri}><h1>{props.cardFound.card.name}</h1></a></Card.Title>
      <Card.Subtitle className="Commander Title">{props.cardFound.card.flavor_text}</Card.Subtitle>
      <Card.Text className="Commander Title">{props.cardFound.card.mana_cost} - {props.cardFound.card.type_line}</Card.Text>
      <Card.Text className="Commander Oracle Title">{props.cardFound.card.oracle_text}</Card.Text>
    </Card>
  ) : (
    <p className="Commander Title">Pas de carte cherchée...</p>
  );
}

export default CardSearched;
