import PropTypes from "prop-types";

const Notification = ({ message }) => {
  const success = {
    color: "green",
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

  return <div style={success}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
