import React, { Component } from "react";
import Counter from "./counter";
class Liste extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
    console.log("row " + counterId + " deleted");
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });
  };
  render() {
    return (
      <React.Fragment>
        <button
          className="btn-primary btn-samll btn-m2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.length === 0 && <h4> No Item ! </h4>}
        {this.state.counters.map(counter => {
          return (
            <div key={counter.id}>
              <Counter
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                key={counter.id}
                counter={counter}
              />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Liste;
