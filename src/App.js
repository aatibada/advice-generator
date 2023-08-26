import patternDividerDesktop from "./images/pattern-divider-desktop.svg";
import patternDividerMobile from "./images/pattern-divider-mobile.svg";
import iconDice from "./images/icon-dice.svg";

function App() {


  return (
    <div className="App">
      <main className="advice-container">
        <h1>Advice #117</h1>
        <blockquote>
          "It is easy to sit up and take notice, what's difficult is getting up
          and taking action"
        </blockquote>
        <img className="divider" src={patternDividerDesktop} alt="Artistic pattern" />
        <button>
          <img src={iconDice} alt="Dice icon" />
        </button>
      </main>
    </div>
  );
}

export default App;
