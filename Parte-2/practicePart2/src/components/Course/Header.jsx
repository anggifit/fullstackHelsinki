import PropTypes from "prop-types";

const Header = ({ course }) => {
  return (
    <header>
      <h1 className="text-2xl text-blue-800 font-bold">{course}</h1>
    </header>
  );
};

Header.propTypes = {
  course: PropTypes.string.isRequired,
};

export default Header;
