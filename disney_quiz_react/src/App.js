import axios from "axios"
import {useState, useEffect} from "react"
import './App.css';

function App() {
  const url = "https://api.disneyapi.dev/characters"
  const [character, setCharacter] = useState(null)

  useEffect (() => {
    axios.get(url)
    .then(response => {
      setCharacter(response.data)
    })

  }, [url])

    return (
      <div className="App">
        <h1>{character.name}</h1>
      </div>
    );

  }



export default App;
