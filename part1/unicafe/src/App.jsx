import { useState } from "react";

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100 + "%";

  if (all === 0) {
    return <div>No feedback given </div>;
  }
  return (
    <div>
      <tr>
        <td>
          <StatisticLine text="good" value={good} />
        </td>
      </tr>
      <tr>
        <td>
          <StatisticLine text="neutral" value={neutral} />
        </td>
      </tr>
      <tr>
        <td>
          <StatisticLine text="bad" value={bad} />
        </td>
      </tr>
      <tr>
        <td>
          <StatisticLine text="all" value={all} />
        </td>
      </tr>
      <tr>
        <td>
          <StatisticLine text="average" value={average} />
        </td>
      </tr>
      <tr>
        <td>
          <StatisticLine text="positive" value={positive} />
        </td>
      </tr>
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

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

  return (
    <div>
      <div>
        <h1>
          <b>give feedback</b>
        </h1>
      </div>
      <div>
        <Button onClick={handleGoodClick} text="good" />
        <Button onClick={handleNeutralClick} text="neutral" />
        <Button onClick={handleBadClick} text="bad" />
      </div>
      <div>
        <h1>
          <b>statistics</b>
        </h1>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
