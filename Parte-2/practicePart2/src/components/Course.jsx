import PropTypes from "prop-types";
import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  return (
    <div className="container mx-auto pt-4">
      <Header course={course.name} />
      <Content course={course.parts} />
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
};

export default Course;
