import Input from "./Input";
import PropTypes from "prop-types";

const Filter = ({ findName, onChange, persons }) => {
  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(findName.toLowerCase())
  );

  return (
    <div>
      <Input title="Filter shown with" value={findName} onChange={onChange} />

      <ul>
        {personsToShow.length > 0 ? (
          personsToShow.map((person) => (
            <li key={person.id}>
              {person.name} {person.number}
            </li>
          ))
        ) : (
          <li className="italic">No matches found</li>
        )}
      </ul>
    </div>
  );
};

Filter.propTypes = {
  findName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  persons: PropTypes.array.isRequired,
};

export default Filter;
