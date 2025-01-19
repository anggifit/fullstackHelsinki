import PropTypes from "prop-types";
import Header from "./Course/Header";
import Content from "./Course/Content";
import Total from "./Course/Total";

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce(
    (previous, current) => previous + current.exercises,
    0 // valor inicial
  );
  return (
    <li className="container mx-auto pt-4">
      <Header course={course.name} />
      <Content course={course.parts} />
      <Total total={totalExercises} />
    </li>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
};

export default Course;
