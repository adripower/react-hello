import React from "react";

export function Person() {
  return (
    <div className="person">
      <h3>Nombre: Pedro</h3>
      <p>Edad: 25</p>
    </div>
  );
}

export function App() {
  return (
    <div className="App ">
      <h1>Hola caracola</h1>
      <Person />
      <Person />
    </div>
  );
}
