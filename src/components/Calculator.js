import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const startShopping = (e) => {
    setInput(e.target.value);

    input.toLocaleString();
    console.log(input);

    e.preventDefault();
  };

  return (
    <div>
      <div className="login">
        <h1>AutoCalculator</h1>

        <form>
          <h4 className="text">
            You would like to use: {input}
          </h4>
          <input
            type="number"
            placeholder="Enter amount to use"
            required="required"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            className="btn btn-primary btn-block btn-large"
            onClick={startShopping}
          >
            Start Shopping
          </button>
        </form>
      </div>
    </div>
  );
}

export default Calculator;
