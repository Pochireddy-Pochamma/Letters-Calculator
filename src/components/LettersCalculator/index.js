// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inp: ''}

  onChangeInp = event => {
    this.setState({inp: event.target.value})
  }

  render() {
    const {inp} = this.state
    return (
      <div className="app-container">
        <div className="cont">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="phrase" htmlFor="letters" id="phr">
            Enter the phrase
          </label>
          <input
            type="text"
            id="letters"
            placeholder="Enter the phrase"
            onChange={this.onChangeInp}
            className="input"
          />
          <p className="para">No.of letters:{inp.length}</p>
        </div>
        <div className="img-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
