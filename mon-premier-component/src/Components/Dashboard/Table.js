import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";

function BasicTable() {
  const apiURL = "https://api.scryfall.com/cards/random";

  const [card, setCard] = useState('');
  
  useEffect(() => {
    axios.get(apiURL).then((reponse) => {
      setCard(reponse.data);
    });
  }, []);

  const data = [
    {
      name: card.name,
      color: card.colors,
      cost: card.mana_cost,
      power: card.power,
      toughness: card.toughness,
    },
  ];
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Color</th>
          <th>Cost</th>
          <th>Power</th>
          <th>Toughness</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.name}</td>
              <td>{value.color}</td>
              <td>{value.cost}</td>
              <td>{value.power}</td>
              <td>{value.toughness}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
    
  );
}

export default BasicTable;
