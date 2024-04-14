import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";

function App() {
  let myObj = {
    username : "Soumya",
    age : 23
  }
  let newArray = [1, 2, 3]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-10">
        Tailwind test
      </h1>
      <Card username = "chai aur code" btnText = "Visit me" />
      <Card username = "Soumya" btnText={"Click Me"}/>
    </>
  );
}

export default App;
