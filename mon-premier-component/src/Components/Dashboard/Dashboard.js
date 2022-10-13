import "./Dashboard.css";
import CommanderCard from "./Card";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/cardsearch");
  }
  return (
    <div className="body">
      <h1 className="Title">Commander</h1>
      <CommanderCard />
      <Button className="mx-auto justify-content-center" onClick={handleClick}>
        Rechercher une carte ?
      </Button>
    </div>
  );
}
export default Dashboard;
