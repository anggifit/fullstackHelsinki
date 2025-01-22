import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
    };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat(newPerson));

    setNewName("");
    setNewNumber("");
  };

  return (
    <div className="container mx-auto pt-4">
      <h2 className="text-2xl text-blue-700 font-bold">Phonebook</h2>
      <form>
        <div className="mb-2 p-2">
          name:{" "}
          <input
            value={newName}
            onChange={handleAddNewName}
            className="bg-slate-300 rounded"
          />
        </div>
        <div className="mb-2 p-2">
          number:{" "}
          <input
            value={newNumber}
            onChange={handleAddNewNumber}
            className="bg-slate-300 rounded"
          />
        </div>
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
      <h2 className="text-xl text-blue-500 font-semibold">Numbers</h2>
      <ul className="list-disc pl-8 pt-4">
        {persons.map((person, index) => (
          <li key={index}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
