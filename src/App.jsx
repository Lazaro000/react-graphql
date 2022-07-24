import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Persons } from "./Persons";
import { PersonForm } from "./PersonForm";
import { usePersons } from "./persons/custom-hooks";
import { Notify } from "./Notify";
import { PhoneForm } from "./PhoneForm";

function App() {
  const { data, loading, error } = usePersons();
  const [errorMessage, setErrorMessage] = useState(null);

  if (error) return <span style="color: red">{error}</span>;

  const notifyError = (message) => {
    setErrorMessage(message);
    setTimeout(() => setErrorMessage(null), 5000);
  };

  console.log(data);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Persons persons={data?.allPersons}></Persons>
        )}

        <PersonForm notifyError={notifyError} />
        <PhoneForm notifyError={notifyError} />

        <Notify errorMessage={errorMessage} />
      </div>
    </div>
  );
}

export default App;
