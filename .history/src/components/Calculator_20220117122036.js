import React from 'react'
import "./Calculator.css"

function Calculator() {
  const inputValue = () => {

  }
  const debit;
  const Calculator = (debit) => {
    const debit = inputValue  <= reduceAmount ? reduceAmount-= inputValue : console.log("Invalid")
  }
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
            <button class="btn btn-primary btn-block btn-large">
              Start Shopping
            </button>
          </form>
        </div>
      </div>
    );
}

export default Calculator
