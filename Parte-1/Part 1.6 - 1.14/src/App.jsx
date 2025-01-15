import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  // guarda los clics de cada botón en su propio estado
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
  const totalClicks = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / totalClicks;
  const positiveClicks = (good / totalClicks) * 100;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-blue-500">Unicafe</h1>
      <div>
        <h2 className="text-xl text-blue-400">Give feedback</h2>
        <Button text="Good" onClick={handleGoodClick} />
        <Button text="Neutral" onClick={handleNeutralClick} />
        <Button text="Bad" onClick={handleBadClick} />
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        totalClicks={totalClicks}
        average={average}
        positiveClicks={positiveClicks}
      />
    </div>
  );
};

export default App;
