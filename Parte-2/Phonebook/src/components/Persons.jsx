import PropTypes from "prop-types";
import ActionButton from "./ActionButton";

const Persons = ({ persons, onClick }) => {
  return (
    <ul className="list-disc pl-8 pt-4">
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
          <ActionButton title="Delete" onClick={() => onClick(person.id)} />
        </li>
      ))}
    </ul>
  );
};

Persons.propTypes = {
  persons: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Persons;
