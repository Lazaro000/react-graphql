import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ALL_PERSONS } from "./persons/graphql-queries";
import { CREATE_PERSON } from "./persons/graphql-mutations";

export const PersonForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const [createPerson] = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    createPerson({ variables: { name, phone, street, city } });

    setName("");
    setPhone("");
    setStreet("");
    setCity("");
  };

  return (
    <div>
      <h2>Create a new Person</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
        <input
          type="text"
          placeholder="phone"
          value={phone}
          onChange={(evt) => setPhone(evt.target.value)}
        />
        <input
          type="text"
          placeholder="Street"
          value={street}
          onChange={(evt) => setStreet(evt.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(evt) => setCity(evt.target.value)}
        />
        <button>Add Person</button>
      </form>
    </div>
  );
};
