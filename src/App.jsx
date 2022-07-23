import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("http://localhost:4000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
            allPersons {
              name
            }
          },
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
      });
  });

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + GraphQL</h1>
    </div>
  );
}

export default App;
