import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const groupMember = [
  "Birhanu Matebe",
  "Rediet Seleshi Tsega",
  "RUTH AKALU SIYOUM",
  "Hermela Ejigu",
  "Alemayehu Tesfaye",
  "Milkiyas Habtamu",
  "Birhan Aklilu Gebreyohannes",
  "Mastewal Asnake"
];


const display = groupMember.map((name, index) => <li key={index}>{index + 1+}. {name} </li>);

root.render(
  <div className="form">
    <ul>{display}</ul> 
  </div>
);
