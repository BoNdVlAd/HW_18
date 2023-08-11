import logo from './logo.svg';
import './App.css';
import React from 'react';
import Timer from './components/Timer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      step: 0,
      startTimer: false,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleInput2 = this.handleInput2.bind(this);
    this.setTimer = this.setTimer.bind(this);
  }

  handleInput(value) {
    this.setState({
      time: value,
    });
    console.log(this.state.time);
  }

  handleInput2(value) {
    this.setState({
      step: value,
    });
    console.log(this.state.time);
  }

  setTimer() {
    this.setState({
      startTimer: true,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="filters">
          <label>
            <input
              placeholder="time"
              type="number"
              onChange={(e) => this.handleInput(e.target.value)}
            />{' '}
            ms
          </label>
          <label>
            <input
              placeholder="step"
              type="number"
              onChange={(e) => this.handleInput2(e.target.value)}
            />
            ms
          </label>

          <button onClick={this.setTimer}>SET TIMER</button>
        </div>
        {this.state.startTimer && (
          <Timer
            autostart={true}
            key={this.state.time}
            time={this.state.time}
            step={this.state.step}
          />
        )}
      </div>
    );
  }
}

export default App;
