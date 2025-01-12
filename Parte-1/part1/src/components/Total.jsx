/* eslint-disable react/prop-types */

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};

Total.propTypes = {};

export default Total;
