import {useState, useEffect} from "react";
import "./Joker.css";

export default function Joker() {
  let [joke, setJoke] = useState({});

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let responce = await fetch(URL);
    let jsonResponce = await responce.json();
    setJoke({setup: jsonResponce.setup, punchline: jsonResponce.punchline});
  };

  useEffect(() => {
    async function getFirstJoke() {
      let responce = await fetch(URL);
      let jsonResponce = await responce.json();
      setJoke({setup: jsonResponce.setup, punchline: jsonResponce.punchline});
    }
    getFirstJoke();
  }, []);

  return (
    <div className="container">
      <h3>Joker!</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  );
}