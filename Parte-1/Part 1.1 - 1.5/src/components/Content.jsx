/* eslint-disable react/prop-types */
import Part from "./Part";

const Content = ({ parts }) => (
  <div>
    <ul>
      {parts.map((part) => (
        <Part key={part.name} part={part.name} number={part.exercises} />
      ))}
    </ul>
  </div>
);

export default Content;
