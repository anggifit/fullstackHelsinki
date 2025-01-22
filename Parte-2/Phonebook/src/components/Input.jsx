import PropTypes from "prop-types";

const Input = ({ title, value, onChange }) => {
  return (
    <div className="mb-2 p-2">
      {title}:{" "}
      <input
        value={value}
        onChange={onChange}
        className="bg-slate-300 rounded"
      />
    </div>
  );
};

Input.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
