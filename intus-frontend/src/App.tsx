import React from "react";
import "./App.scss";
import { Navbar } from "@/components/navbar";
import { Participants } from "@/features/participants";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Participants />
    </div>
  );
}

export default App;
