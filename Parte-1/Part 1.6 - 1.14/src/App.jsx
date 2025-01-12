import PropTypes from "prop-types";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => setCounter(counter + 1), 1000);

  console.log("rendering...", counter);
  return <div>{counter}</div>;
};

App.propTypes = {
  counter: PropTypes.number,
};

export default App;
