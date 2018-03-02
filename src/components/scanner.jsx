import React, { Component } from 'react';
import QrReader from 'react-qr-reader'
import Confirmation from './confirmation.jsx'
// import logo from './logo.svg';
// import './App.css';

class Scanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 300,
      result: 'No result',
      successfullyScanned: false
    }
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    if(data){
      this.setState({
        result: data,
        successfullyScanned: true
      })
      console.log("data", data);
      console.log("result", this.state.result);
    }
  }
  handleError(err){
    console.error(err)
  }
  render(){

    const body =

    <div className="scan-page">
      <h2 className="scan-receipt-text">Scan your receipt</h2>

      <div className="scanner">
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
          />
          {/* <p>{this.state.result}</p> */}
      </div>

      {/* <div className="scanner-button">
        <button onClick={this.handleScan}>Scan</button>
      </div> */}
    </div>

    return(
      <div>
        {this.state.successfullyScanned ?
          <Confirmation result={this.state.result}/> :
        body}
      </div>
    )
  }

}


export default Scanner;












// import React from "react"
// import Confirmation from "./confirmation.jsx"
// import QrReader from "react-qr-reader"
//
// const Scanner = (props) => {
//
//   const handleScan = () => {
//     console.log("scanned")
//     console.log("props", props);
//     return (
//
//       props
//       // props.onClick(props.scanButtonClicked)
//     )
//
//
//   }
//
//   return (
//     <div className="scan-page">
//       <h2 className="scan-receipt-text">Scan your receipt...</h2>
//
//       <div className="scanner">
//         <QrReader
//           // delay={this.state.delay}
//           // onError={this.handleError}
//           // onScan={this.handleScan}
//           />
//
//       </div>
//
//       <div className="scanner-button">
//         <button onClick={handleScan}>Scan</button>
//       </div>
//
//     </div>
//
//   )
// }
//
// export default Scanner
