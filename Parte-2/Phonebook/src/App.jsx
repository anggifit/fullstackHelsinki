import { useState } from "react";
import Input from "./components/Input";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [findName, setFindName] = useState("");

  const handleAddNewName = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };

  const handleAddNewNumber = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat(newPerson));

    setNewName("");
    setNewNumber("");
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(findName.toLowerCase())
  );

  const handleFindName = (event) => {
    event.preventDefault();
    setFindName(event.target.value);
  };

  return (
    <div className="container mx-auto pt-4">
      <h2 className="text-2xl text-blue-700 font-bold">Phonebook</h2>
      <Input
        title="Filter shown with"
        value={findName}
        onChange={handleFindName}
      />

      <ul>
        {personsToShow.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
      <form>
        <h2 className="text-xl font-semibold py-3">Add a new</h2>
        <Input value={newName} onChange={handleAddNewName} title="Name" />
        <Input value={newNumber} onChange={handleAddNewNumber} title="Number" />
        <div className="mb-2 p-2">
          <button
            type="submit"
            onClick={addPerson}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
          >
            add
          </button>
        </div>
      </form>
      <h2 className="text-xl font-semibold">Numbers</h2>
      <ul className="list-disc pl-8 pt-4">
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
