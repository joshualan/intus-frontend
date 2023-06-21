import React from "react";
import "./App.scss";
import { RouterProvider, router } from "@/routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
