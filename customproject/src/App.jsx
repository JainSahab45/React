import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  let [counter, setCount] = useState(0);

  const subvalue = () => {
    if (counter >= 0) {
      setCount(counter - 1);
      console.log(":(", counter);
    }
  };
  const addvalue = () => {
    if (counter <= 20) {
      setCount(counter + 1);
      console.log(":)", counter);
    }
  };
  return (
    <>
      <h1>I love vrinda</h1>
      <h2>Do u love me {counter} time</h2>
      <button onClick={addvalue}>YEs</button>
      <br />
      <button onClick={subvalue}>No</button>
    </>
  );
}

export default App;
