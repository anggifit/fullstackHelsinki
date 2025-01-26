import PropTypes from "prop-types";

const Notification = ({ message, isError }) => {
  const success = {
    color: "green",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  const error = {
    color: "red",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  if (message === null) {
    return null;
  }
  return <div style={isError ? error : success}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string,
  isError: PropTypes.bool,
};

export default Notification;
