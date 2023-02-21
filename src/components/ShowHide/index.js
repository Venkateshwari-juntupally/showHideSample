// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isClicked: true,
  }

  showText = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }
  render() {
    const {isClicked} = this.state
    const text = isClicked ? 'Jonas' : 'Joe'

    return (
      <div>
        <h1>Show/Hide</h1>
        <button type="button" onClick={this.showText}>
          Show/Hide Firstname
        </button>
        <p>{text}</p>
        <button type="button" onClick={this.showText}>
          Show/Hide Lastname
        </button>
        <p>{text}</p>
      </div>
    )
  }
}
export default ShowHide
