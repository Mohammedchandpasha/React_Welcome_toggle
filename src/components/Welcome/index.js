// Write your code here
import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {text: 'subscribe'}

  changeStatus = () => {
    const {text} = this.state

    if (text === 'subscribe') {
      this.setState({text: 'subscribed'})
    } else {
      this.setState({text: 'subscribe'})
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="container">
        <h1 className="heading">welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button type="button" onClick={this.changeStatus}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
