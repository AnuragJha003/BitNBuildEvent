import React from "react";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Timeline from "./components/Timeline";
import Register from "./components/Register";
import Submission from "./components/Submission";
import PrblmStatements from "./components/PrblmStatements";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        <Details />
        <Timeline />
        <PrblmStatements />
        <Register />
        <Submission />
      </div>
    </div>
  );
}

export default App;
