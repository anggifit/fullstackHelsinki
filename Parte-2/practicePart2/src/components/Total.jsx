import PropTypes from "prop-types";

const Total = ({ total }) => {
  return <p>Total de {total} exercises</p>;
};

Total.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Total;
