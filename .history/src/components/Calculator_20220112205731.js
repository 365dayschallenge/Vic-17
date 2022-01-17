import React from 'react'

function Calculator() {
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
