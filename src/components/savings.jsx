import React from "react"
import Home from "../containers/home.js"

class Savings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      homeButtonClicked: false
  }
  this.homeButton = this.homeButton.bind(this)
}

homeButton(e) {
  this.setState({
    homeButtonClicked: true
  })
}

render() {

  const body =

  <div className="savings-page">
    <h1>Christmas Pot</h1>
    <div className="cylinder-wrapper">
      <img className="cylinder" src="../../images/cylinder-chart.png" alt="Helping you live well for less"/>
    </div>

    <div className="key">
      <div><p className="key-potential">£110.65</p><p className="key-potential">Potential</p></div>
      <div><p className="key-savings">£30.08</p><p className="key-savings">Savings</p></div>
      <div><p className="key-nectar">£9.27</p><img className="nectar" src="../../images/nectar_logo.png" /></div>
    </div>
    {/* <h4>Transactions</h4> */}
      <div className="transactions">
        <h5>Shopping at Sainsbury's Longstone</h5>
        <p>£81.36</p>
        <p>£0.64 swept into your savings pot</p>
      </div>
      <div className="transactions">
        <h5>Starbucks Edinburgh</h5>
        <p>£17.22</p>
        <p>£0.78 swept into your savings pot</p>
      </div>
    <div className="home-button">
      <button
      onClick={this.homeButton}>Main menu</button>
    </div>
  </div>

  return (
    <div>
      {this.state.homeButtonClicked ?
        <Home /> :
        body}
    </div>
  )
}
}

export default Savings
