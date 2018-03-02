import React from "react"
import Scanner from "./scanner.jsx"
import Savings from "./savings.jsx"

class Confirmation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      handleScanButtonClicked: false,
      handleSavingsButtonClicked: false,
      status: null
    }
    this.handleScanButton = this.handleScanButton.bind(this)
    this.handleSavingsButton = this.handleSavingsButton.bind(this)
}



  handleScanButton(e) {
    this.setState({
      handleScanButtonClicked: true,
      status: true
    })
    console.log("Scan button clicked");
  }

  handleSavingsButton(e) {
    this.setState({
      handleSavingsButtonClicked: true,
      status: false

    })
    console.log("ifyhin");
  }

  render() {

    const body =


// added button div below and changed button text
    <div className="scan-confirmation-page">
      <h2 className="black-text" id="big-saver-text">Hey, big saver!</h2>
      <h2 className="black-text" id="you-just-saved-text">You just saved</h2>
      <h2 className="scanned-amount-text"> £{this.props.result}</h2>
      <div className="confirmation-screen-buttons">
        <button className="scan-button" onClick={this.handleScanButton}>Scan another receipt</button>
        <button className="savings-button" onClick={this.handleSavingsButton}>Savings to date</button>
      </div>
    </div>

    // const isScannedButtonClicked = this.state.handleScanButtonClicked;
    //
    // const isSavingsButtonClicked = this.state.handleSavingsButtonClicked;
    //
    // let path = null;
    // if(isScannedButtonClicked) {
    //   path = "Scanner"
    // }else if (isSavingsButtonClicked) {
    //   path = "Savings"
    // }



  return (
    //
    // <div>
    //   <{path} />
    // </div>



    <div>
      {this.state.status ? (
        this.state.handleScanButtonClicked ?
        <Scanner /> :
      body)
      : (
      this.state.handleSavingsButtonClicked ?
        <Savings /> :
        body)}
    </div>
  )

}

}

export default Confirmation
