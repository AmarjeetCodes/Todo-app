import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import axios from "axios";
import { baseURL } from "./utils/constant";

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => setToDos(res.data))
      .catch((err) => console.log(err));
  }, [updateUI]);

  const saveToDo = () => {
    console.log("Adding ToDo:", input); // Debugging line
    axios
      .post(`${baseURL}/save`, { toDo: input })
      .then((res) => {
        console.log("Response from server:", res.data); // Debugging line
        setUpdateUI((prevState) => !prevState);
        setInput("");
      })
      .catch((err) => console.log("Error:", err)); // Debugging line
  };

  return (
    <main>
      <div className="container">
        <h1 className="title">To Do App</h1>
        <div className="input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add a ToDo..."
          />
          <button onClick={saveToDo}>Add</button>
          <div className="list">
            {toDos.map((el) => (
              <ToDo key={el._id} text={el.toDo} id={el._id} setUpdateUI={setUpdateUI} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
