import PropTypes from "prop-types";

const MainHeader = ({ title }) => {
  return <h1 className="text-4xl text-blue-900 font-extrabold">{title}</h1>;
};

MainHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainHeader;
