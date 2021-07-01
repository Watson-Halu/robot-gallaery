import React from "react";
// import logo from "./logo.svg";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";

function App() {
  return (
    <ul>
      {robots.map((r) => {
        return <Robot id={r.id} name={r.name} email={r.email} />;
      })}
    </ul>
  );
}
export default App;
