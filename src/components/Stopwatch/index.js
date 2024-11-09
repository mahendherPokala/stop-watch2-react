import React, {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeElapsedInSeconds: 0, isRunning: false}

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  startTimer = () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
        isRunning: true,
      }))
    }, 1000)
  }

  stopTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isRunning: false})
  }

  resetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({timeElapsedInSeconds: 0, isRunning: false})
  }

  formatTime = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    const seconds = timeElapsedInSeconds % 60
    const formattedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const formattedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${formattedMinutes}:${formattedSeconds}`
  }

  render() {
    const {isRunning} = this.state

    return (
      <div className="stopwatch-bg-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch-heading">Stopwatch</h1>
          <div className="timer-display">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-icon"
            />
            <p className="timer-text">Timer</p>
            <h1 className="time">{this.formatTime()}</h1>
          </div>
          <div className="buttons-container">
            <button
              className="start-button"
              type="button"
              onClick={this.startTimer}
              disabled={isRunning}
            >
              Start
            </button>
            <button
              className="stop-button"
              type="button"
              onClick={this.stopTimer}
              disabled={!isRunning}
            >
              Stop
            </button>
            <button
              className="reset-button"
              type="button"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
