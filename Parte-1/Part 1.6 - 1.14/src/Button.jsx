import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="p-2 m-2 bg-blue-200 rounded-md cursor-pointer"
    >
      {text}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
