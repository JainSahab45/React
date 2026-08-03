import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const myobj  ={
    name : "Vrinda",
    sex : "Never"
  }
  let arr = [1,2,3]
  return (
    <>
      <h1 className="bg-green-200 text-black p-4 rounded-2xl">
        Tailwind is bad
      </h1>
      <Card username = "Vrinda" />
      <Card username= "Tanish"/>
      <Card />
    </>
  );
}

export default App;