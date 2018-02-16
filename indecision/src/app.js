console.log("App.js is running");

//only render the subtitle if exists. logical and
//create a brand new property: options, array of string options.

function clickOption(option) {
  console.log("Option clicked:", option);
}

const plusId = 100;
const minusId = 101;
const resetId = 102;
let count = 0;

const addOne = () => {
  console.log("addOne()");
  count++;
  renderCounterApp();
};

const minusOne = () => {
  console.log("minusOne()");
  count--;
  renderCounterApp();
};

const reset = () => {
  console.log("reset");
  count = 0;
  renderCounterApp();
};

const app = document.getElementById("app");

const renderCounterApp = () => {
  const counterTemplate = (
    <div>
      <h1>Count: {count}</h1>
      <button id={plusId} onClick={addOne}>
        +1
      </button>
      <button id={minusId} className="button" onClick={minusOne}>
        -1
      </button>
      <button id={resetId} className="button" onClick={reset}>
        Reset
      </button>
    </div>
  );

  ReactDOM.render(counterTemplate, app);
};

renderCounterApp();
