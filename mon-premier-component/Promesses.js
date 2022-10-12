const { useEffect } = require("react");

const examen = new Promise((success, failure) => {
  const note = Math.random() * 20;
  if (note > 10) {
    success(note);
  } else {
    failure(note);
  }
});
const examenReussi = (result) => {
  console.log("Bravo, vous avez reussi abec ${result}");
};

function examenRecale(result) {
  console.log("raté");
}

examen.then(examenReussi, examenRecale);

/* const toto = fetch("monapi.fr/data").then(
  (response) => {
    setState(response);
    fetch("autre.fr/url").then(
      (response) => {
        setState(response);
      },
      (error) =>{
        setError(error)
      });
  },
  (error) => {
    setError(error);
  }
); */
useEffect(() => {
  const mafonction = async () => {
    const mesusers = await fetch('monapi.fr/url');
    const mesAutresDonnées = await fetch('autre.fr/url');
    setState(toto);
  }
  

return () => {}
}, [])