import reactLogo from "./assets/react.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { Persons } from "./Persons";
import { PersonForm } from "./PersonForm";

const ALL_PERSONS = gql`
  query {
    allPersons {
      id
      name
      phone
      address {
        street
        city
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(ALL_PERSONS, {
    pollInterval: 2000,
  });

  if (error) return <span style="color: red">{error}</span>;

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

        <PersonForm />
      </div>
    </div>
  );
}

export default App;
