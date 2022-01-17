import React, { useState } from 'react'
import "./Calculator.css"

function Calculator() {
  const [input, setInput] = useState()

  let reduceAmount = 400;
  const handleOnChange = (event) => {
    input = event.target.value
    setInput(event.target.value)
    console.log(input);
  }

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
              value={input = 1000}
              placeholder="Enter amount to use"
              required="required"
            />
            <button class="btn btn-primary btn-block btn-large" onClick={() => {
              setInput(document.getElementsByTagName("input")[0].value);
              console.log(
                input
              )
            }}>
              Start Shopping
            </button>
          </form>
        </div>
      </div>
    );
}

export default Calculator
