// console.log("App.js is running");
// const app = document.getElementById("app");
// const plusId = 100;
// const minusId = 101;
// const resetId = 102;
// let count = 0;
//
// const addOne = () => {
//   console.log("addOne()");
//   count++;
//   renderCounterApp();
// };
//
// const minusOne = () => {
//   console.log("minusOne()");
//   count--;
//   renderCounterApp();
// };
//
// const reset = () => {
//   console.log("reset");
//   count = 0;
//   renderCounterApp();
// };
//
//
//
// const renderCounterApp = () => {
//   const counterTemplate = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button id={plusId} onClick={addOne}>
//         +1
//       </button>
//       <button id={minusId} className="button" onClick={minusOne}>
//         -1
//       </button>
//       <button id={resetId} className="button" onClick={reset}>
//         Reset
//       </button>
//     </div>
//   );
//
//   ReactDOM.render(counterTemplate, app);
// };
//
// renderCounterApp();

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOneToCount = this.addOneToCount.bind(this);
    this.subtractOneFromCount = this.subtractOneFromCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
    this.state = {
      count: 0,
    };
  }

  addOneToCount() {
    this.setState((prevState) => {
      return {
        count: prevState.count+1
      }
    });
  }

  subtractOneFromCount() {
    this.setState((prevState) => {
      return {
        count: prevState.count-1
      }
    });
  }

  resetCount() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOneToCount}>+1</button>
        <button onClick={this.subtractOneFromCount}>-1</button>
        <button onClick={this.resetCount}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));