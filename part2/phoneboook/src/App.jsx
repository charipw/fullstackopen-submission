import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    async function fetchData() {
      const personsData = await axios.get("http://localhost:3001/persons");
      setPersons(personsData.data);
    }
    fetchData();
  }, []);

  const addName = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name == newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchStringChange = (event) => {
    setSearchString(event.target.value);
  };

  let personsToShow = persons;

  if (searchString != "") {
    personsToShow = persons.filter((person) =>
      person.name.toUpperCase().includes(searchString.toUpperCase())
    );
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchString} onChange={handleSearchStringChange} />

      <h2>add a new</h2>
      <PersonForm
        onSubmit={addName}
        name={newName}
        number={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
