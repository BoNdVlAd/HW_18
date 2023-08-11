import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const orange = '#FC9A40';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    const { time, autostart, step } = props;

    this.state = {
      timeLeft: Number(time),
      step: Number(step),
      autostart: autostart,
    };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.tick = this.tick.bind(this);
  }

  tick() {
    console.log(this.state);
    console.log(this.props.time);
    if (this.state.timeLeft === 0) {
      clearInterval(this.Interval);
      return;
    }
    this.setState({
      timeLeft: this.state.timeLeft - this.state.step,
    });
  }
  componentDidMount() {
    console.log(this.autostart);
    if (this.state.autostart) {
      this.startTimer();
    }
  }

  startTimer() {
    this.Interval = setInterval(() => {
      this.tick();
    }, this.state.step);
  }
  pauseTimer() {
    clearInterval(this.Interval);
  }
  componentWillUnmount() {
    clearInterval(this.Interval);
  }

  render() {
    return (
      <div>
        <CircularProgressbar
          value={(this.state.timeLeft / Number(this.props.time)) * 100}
          text={`${this.state.timeLeft}ms`}
          styles={buildStyles({
            textColor: '#FFF',
            pathColor: orange,
            tailColor: 'rgba(255, 255, 255, 0.2)',
          })}
        />
        <div className="buttons">
          <button onClick={this.startTimer}>START</button>
          <button onClick={this.pauseTimer}>PAUSE</button>
        </div>
      </div>
    );
  }
}

export default Timer;
