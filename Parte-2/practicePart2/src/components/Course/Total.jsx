import PropTypes from "prop-types";

const Total = ({ total }) => {
  return (
    <p className="pt-2 text-blue-500 font-semibold">
      Total de {total} exercises
    </p>
  );
};

Total.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Total;
