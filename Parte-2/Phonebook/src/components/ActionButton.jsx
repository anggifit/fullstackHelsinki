import PropTypes from "prop-types";

const ActionButton = ({ onClick, title }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="bg-blue-500 m-2 hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded"
    >
      {title}
    </button>
  );
};

ActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ActionButton;
