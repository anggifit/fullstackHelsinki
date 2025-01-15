import PropTypes from "prop-types";

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
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p className="text-blue-700 pt-1">All: {totalClicks}</p>
      <p className="text-blue-700">Average: {average > 0 ? average : 0}</p>
      <p className="text-blue-700">
        Positive: {positiveClicks > 0 ? positiveClicks : 0}%
      </p>
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
