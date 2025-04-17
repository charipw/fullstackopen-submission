import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const Button = (props) => {
    return <button onClick={props.onClick}>{props.text}</button>;
  };

  return (
    <div>
      <div>
        <h1>
          <b>give feedback</b>
        </h1>
      </div>
      <div>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
      </div>
      <div>
        <h1>
          <b>statistics</b>
        </h1>
      </div>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {good + neutral + bad}</div>
      <div>average {(good + neutral + bad) / 3}</div>
      <div>positive {good / (good + neutral + bad)}%</div>
    </div>
  );
};

export default App;
