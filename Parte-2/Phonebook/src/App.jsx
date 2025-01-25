import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import numbers from "./sevices/numbers";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [findName, setFindName] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    numbers.getAll().then((data) => {
      setPersons(data); // data is an array of objects
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

  const handleClickDelete = (id) => {
    window.confirm(`Do you want to delete this person?`) &&
      handleConfirmDelete(id);
  };

  const handleConfirmDelete = (id) => {
    numbers.eliminate(id).then(() => {
      setPersons(persons.filter((person) => person.id !== id));
    });
  };

  const updatePerson = (id, newPerson) => {
    numbers.update(id, newPerson).then((response) => {
      setPersons(
        persons.map((person) => (person.id !== id ? person : response))
      );
      setNewName("");
      setNewNumber("");
    });
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };
    if (
      persons.some(
        (person) => person.name === newName && person.number === newNumber
      )
    ) {
      alert(`${newName} is already added to phonebook`);
      return;
    } else if (
      persons.some(
        (person) => person.name === newName && person.number !== newNumber
      )
    ) {
      const person = persons.find((person) => person.name === newName);
      window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      ) && updatePerson(person.id, newPerson);
      return;
    }

    numbers.create(newPerson).then((response) => {
      setPersons(persons.concat(response));
      setNewName("");
      setNewNumber("");
      setMessage(`Added ${newPerson.name}`);
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    });
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
      <Notification message={message} />
      <h2 className="text-xl font-semibold">Numbers</h2>
      <Persons persons={persons} onClick={handleClickDelete} />
    </div>
  );
};

export default App;
