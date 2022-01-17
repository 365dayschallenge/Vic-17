import React, { useState } from 'react'
import "./Calculator.css"

function Calculator() {
  const [input, setInput] = useState()
  const startShopping = () => {
    console.log("SA");
    setInput(input)
  }
  let reduceAmount = 400;
  // const Calculate = (inputValue) => {
  //   const debit = inputValue  <= reduceAmount ? reduceAmount-= inputValue : console.log("Invalid")
  // }
    return (
      <div>
        <div class="login">
          <h1>AutoCalculator</h1>
          <form>
            <input
              type="text"
              placeholder="Enter amount to use"
              required="required"
            />
            <button class="btn btn-primary btn-block btn-large" onClick={() => {
              setInput(document.getElementsByTagName("input")[0].value);
              document.getElementsByTagName("input")[0].value = ""
            }}>
              Start Shopping
            </button>
          </form>
        </div>
      </div>
    );
}

export default Calculator
