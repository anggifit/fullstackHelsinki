import PropTypes from "prop-types";

const StatisticLine = ({ text, value, symbol }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>
          {value}
          {symbol ? ` ${symbol}` : ""}
        </td>
      </tr>
    </tbody>
  );
};

StatisticLine.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  symbol: PropTypes.string,
};

export default StatisticLine;
