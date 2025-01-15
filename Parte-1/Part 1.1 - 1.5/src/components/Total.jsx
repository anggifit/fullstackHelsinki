import PropTypes from "prop-types";

const Total = ({ totalExercises }) => {
  return <p>Number of exercises {totalExercises}</p>;
};

Total.propTypes = {
  totalExercises: PropTypes.number.isRequired,
};

export default Total;
