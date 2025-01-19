import PropTypes from "prop-types";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce(
    (previous, current) => previous + current.exercises,
    0 // valor inicial
  );
  return (
    <div className="container mx-auto pt-4">
      <Header course={course.name} />
      <Content course={course.parts} />
      <Total total={totalExercises} />
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
};

export default Course;
