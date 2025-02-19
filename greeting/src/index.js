
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// greeting component
function App() {
  const [inputValue, setInputValue] = useState("");
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // content handle function
  const toggleContent = () => {
    if (isSubmitted) {
      setIsContentVisible(!isContentVisible);
    }
  };

// submit handle function
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isSubmitted){
      setIsContentVisible(true); 
      setIsSubmitted(true); 
    }
  };


  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <form onSubmit={handleSubmit} style={{ display: "block" }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="name"
        />

        <input type="submit" value="Submit" />

      </form>
      
      <div style={{ minHeight: "30px" }}>
        {isContentVisible && <p>How are you {inputValue}?</p>}
      </div>
      
      <button onClick={toggleContent}>
        Toggler
      </button>
    </div>
  );


}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);