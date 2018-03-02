import React from "react"
import Scanner from "../components/scanner.jsx"
import Savings from "../components/savings.jsx"

// import ReactDOM from "react-dom"

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      scanButtonClicked: false,
      status: null,
      savingButtonClicked: false
    }
    this.startScan = this.startScan.bind(this)
    this.showPot = this.showPot.bind(this)
  }

  startScan(e) {
    this.setState({
      scanButtonClicked: true,
      status: true
    })
    console.log("Scan button clicked")

  }

  showPot(e) {
    this.setState({
      savingButtonClicked: true,
      status: false
    })
    console.log("Savings button clicked")
  }



  render() {

    const body =

      <div>
        <div className="logo">
          <img src="../../../images/innolab_logo.png" alt="Helping you live well for less"/>
        </div>
        <div className="home-screen-buttons">
          <button className="scan-button" onClick={this.startScan}>Scan my receipt</button>
          <button className="savings-button" onClick={this.showPot}>How much have I saved?</button>
        </div>
      </div>



    return (

      <div>
        {this.state.status ? (
          this.state.scanButtonClicked ?
            <Scanner /> :
            body)
          : (
          this.state.savingButtonClicked ?
            <Savings /> :
          body)}
      </div>

    )
  }


}

export default Home
