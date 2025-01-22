import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [findName, setFindName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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

  const handleFindName = (event) => {
    event.preventDefault();
    setFindName(event.target.value);
  };

  return (
    <div className="container mx-auto pt-4">
      <h2 className="text-2xl text-blue-700 font-bold">Phonebook</h2>
      <Filter findName={findName} onChange={handleFindName} persons={persons} />
      <h2 className="text-xl font-semibold py-3">Add a new</h2>
      <PersonForm
        nameValue={newName}
        onChangeName={handleAddNewName}
        numberValue={newNumber}
        onChangeNumber={handleAddNewNumber}
        onClick={addPerson}
      />
      <h2 className="text-xl font-semibold">Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
