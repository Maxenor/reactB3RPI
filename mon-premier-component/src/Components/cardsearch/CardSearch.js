import "./CardSearch.css";
import { InputGroup, Form } from 'react-bootstrap';


function CardSearch() {
  return (
    <div className="App">
      <h1 className="Title">Que cherchez vous ?</h1>
      <label htmlFor="cardType">Type de carte : </label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  );
}

export default CardSearch;
