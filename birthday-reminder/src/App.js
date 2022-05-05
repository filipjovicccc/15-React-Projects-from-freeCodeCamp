import "./App.css";
import data from "./data";
import { useState } from "react";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <article className="container">
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear List</button>
      </article>
    </main>
  );
}

export default App;
