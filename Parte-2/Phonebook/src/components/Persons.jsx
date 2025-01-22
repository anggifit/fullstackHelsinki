import PropTypes from "prop-types";

const Persons = ({ persons }) => {
  return (
    <ul className="list-disc pl-8 pt-4">
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

Persons.propTypes = {
  persons: PropTypes.array.isRequired,
};

export default Persons;
