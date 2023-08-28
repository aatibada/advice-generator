import { useState } from 'react';
import patternDividerDesktop from "./images/pattern-divider-desktop.svg";
import patternDividerMobile from "./images/pattern-divider-mobile.svg";
import iconDice from "./images/icon-dice.svg";

function App() {
  const [id, setId] = useState(117);
  const [advice, setAdvice] = useState("It is easy to sit up and take notice, what's difficult is getting up and taking action.")

  const handleClick = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (response.ok) {
        const jsonResponse = response.json();
        jsonResponse.then(response => {
          const newId = response.slip.id;
          const newAdvice = response.slip.advice;
          setId(newId);
          setAdvice(newAdvice);
          console.log(newId, newAdvice);
        })
      } else {
        throw new Error("Request failed");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <main className="advice-container">
        <h1>Advice #{id}</h1>
        <q>{advice}</q>
        <img
          className="divider"
          src={patternDividerDesktop}
          alt="Artistic pattern"
        />
        <button onClick={handleClick}>
          <img src={iconDice} alt="Dice icon" />
        </button>
      </main>
    </div>
  );
}

export default App;
