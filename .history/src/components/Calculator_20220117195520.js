import React, { useState } from 'react'
import "./Calculator.css"

function Calculator() {
  const [input, setInput] = useState()
  const startShopping = (e) => {
    setInput(e.input.value)
    e.preventDefault()
    console.log(input);
  }
  let reduceAmount = 400;
  // const Calculate = (inputValue) => {
  //   const debit = inputValue  <= reduceAmount ? reduceAmount-= inputValue : console.log("Invalid")
  // }
    return (
      <div>
        <div className="login">
          <h1>AutoCalculator</h1>
          <form>
            <input
              type="text"
              placeholder="Enter amount to use"
              required="required"
              value = {input}
            />
            <button className="btn btn-primary btn-block btn-large" onClick={startShopping}>
              Start Shopping
            </button>
          </form>
        </div>
      </div>
    );
}

export default Calculator
