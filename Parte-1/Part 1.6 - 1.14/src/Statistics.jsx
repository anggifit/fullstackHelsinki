import PropTypes from "prop-types";
import StatisticLine from "./StatisticLine";

const Statistics = ({
  good,
  neutral,
  bad,
  totalClicks,
  average,
  positiveClicks,
}) => {
  return (
    <div>
      <h2 className="text-xl text-blue-400">Statistics</h2>
      {totalClicks === 0 ? (
        <p className="text-blue-700 pt-1">No feedback given</p>
      ) : (
        <table cellPadding="8">
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={totalClicks} />
            <StatisticLine text="Average" value={average > 0 ? average : 0} />
            <StatisticLine
              text="Positive"
              value={positiveClicks > 0 ? positiveClicks : 0}
              symbol="%"
            />
          </tbody>
        </table>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalClicks: PropTypes.number.isRequired,
  average: PropTypes.number.isRequired,
  positiveClicks: PropTypes.number.isRequired,
};

export default Statistics;
