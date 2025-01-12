import PropTypes from "prop-types";

const Part = ({ part, number }) => {
  return (
    <p>
      {part} {number}
    </p>
  );
};

Part.propTypes = {
  part: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default Part;
