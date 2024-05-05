import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("abcd");
  const [length, setLength] = useState(8);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  useEffect(() => {
    generatePassword();
  }, [length, uppercase, lowercase, number, symbol]);

  function includeUppertCase(e) {
    setUppercase(e.target.checked);
  }

  function includeLowerCase(e) {
    setLowercase(e.target.checked);
  }

  function includeNumber(e) {
    setNumber(e.target.checked);
  }

  function includeSymbol(e) {
    setSymbol(e.target.checked);
  }

  function generatePassword() {
    let pass = "";
    let str = "";

    if (uppercase) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lowercase) {
      str += "abcdefghijklmnopqrstuvwxyz";
    }

    if (number) {
      str += "0123456789";
    }

    if (symbol) {
      str += "~!@#$%^&*_()+-";
    }

    if (str === "") {
      str = " ";
    }

    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * str.length);
      let char = str.charAt(randomNumber);
      pass += char;
    }

    setPassword(pass);
  }

  return (
    <div>
      <h1>Password Generator</h1>
      <hr />
      <input type="text" value={password} id="box" readOnly />
      <div className="count">
        <p id="txt">Select Password length :</p>
        <label htmlFor="length">
          {length}
          <input
            type="range"
            id="length"
            min={8}
            max={140}
            onChange={(e) => setLength(e.target.value)}
            value={length}
          />
        </label>
        <br />
      </div>
      <div className="check">
        <input
          type="checkbox"
          id="upperCase"
          onChange={includeUppertCase}
          className="checkbox"
        />
        <label htmlFor="uppercase">Include Upper Case</label>

        <br />
        <input
          type="checkbox"
          id="lowercase"
          onChange={includeLowerCase}
          className="checkbox"
        />
        <label htmlFor="lowercase">Include Lower Case</label>

        <br />
        <input
          type="checkbox"
          id="number"
          onChange={includeNumber}
          className="checkbox"
        />
        <label htmlFor="number">Include Number</label>

        <br />
        <input
          type="checkbox"
          id="symbol"
          onChange={includeSymbol}
          className="checkbox"
        />
        <label htmlFor="symbol">Include Symbol</label>
        <br />
        <button id="buttons" onClick={generatePassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
}
export default App;
