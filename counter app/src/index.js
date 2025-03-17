
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Counter = ()=>{
  const [count, setCount] = useState(0);

  return (
   
    <div>
       {count}
    <div className="buttons">
      <button className="button" onClick={()=>setCount(count-1)}>-</button>
      <button className="button" onClick={()=>setCount(0)}>set</button>
      <button className="button" onClick={()=>setCount(count+1)}>+</button>
    </div>
    </div>

  );
};
 
root.render(
  <div className="form ">
    <div className="mobScreen"> 
      <h1>  
        <Counter/> 
      </h1>
    </div>
  </div>
);