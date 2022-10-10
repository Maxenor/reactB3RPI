const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("Serveur à l'écoute avec le port 8080");
});

app.get("/parkings", (req, res) => {
  res.send("Liste des parkings");
});
app.listen(8080, () => {
  console.log("Serveur à l'écoute");
});
