import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allFeedBacks, setFeedBack] = useState(0);

  const incrGood = () => {
    setFeedBack(allFeedBacks + 1);
    setGood(good + 1);
  };
  const incrNeutral = () => {
    setFeedBack(allFeedBacks + 1);
    setNeutral(neutral + 1);
  };
  const incrBad = () => {
    setFeedBack(allFeedBacks + 1);
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedbacks</h1>
      <Button handleClick={incrGood} text="good" />
      <Button handleClick={incrNeutral} text="neutal" />
      <Button handleClick={incrBad} text="bad" />
      <br />
      <br />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allFeedBacks={allFeedBacks}
      ></Statistics>
    </div>
  );
};

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistic = props => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = props => {
  if (props.allFeedBacks > 0)
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <Statistic text="good" value={props.good} />
            <Statistic text="neutral" value={props.neutral} />
            <Statistic text="bad" value={props.bad} />
            <Statistic text="all" value={props.allFeedBacks} />
            <Statistic
              text="average"
              value={(props.good - props.bad) / props.allFeedBacks}
            />
            <Statistic
              text="positive"
              value={(props.good * 100) / props.allFeedBacks + "%"}
            />
          </tbody>
        </table>
      </div>
    );

  return <div>No feedback given</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
