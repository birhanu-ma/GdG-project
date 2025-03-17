import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleAdd() {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2>My To-Do List</h2>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul style={{ textAlign: "left" }}>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

root.render(<App />);
