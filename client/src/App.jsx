import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  const connectToBackend = () => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  };

  return (
    <div>
      <h1>React site with Express backend</h1>
      <button onClick={connectToBackend}>Send request to backend</button>
      <p>{data}</p>
    </div>
  );
}

export default App;
