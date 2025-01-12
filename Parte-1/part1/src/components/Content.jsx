/* eslint-disable react/prop-types */
import Part from "./Part";

// eslint-disable-next-line react/prop-types
const Content = ({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
}) => (
  <div>
    <Part part={part1} number={exercises1} />
    <Part part={part2} number={exercises2} />
    <Part part={part3} number={exercises3} />
  </div>
);

export default Content;
