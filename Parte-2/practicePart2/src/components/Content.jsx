import PropTypes from "prop-types";
import Part from "./Part";

const Content = ({ course }) => {
  return (
    <ul className="list-disc pl-8 pt-4">
      {course.map((part) => (
        <Part part={part.name} key={part.id} number={part.exercises} />
      ))}
    </ul>
  );
};

Content.propTypes = {
  course: PropTypes.array.isRequired,
};

export default Content;
