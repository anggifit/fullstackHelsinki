import PropTypes from "prop-types";

const Part = ({ part, number }) => {
  return (
    <li>
      {part} {number}
    </li>
  );
};

Part.propTypes = {
  part: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default Part;
