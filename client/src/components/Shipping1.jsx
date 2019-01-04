import React from 'react';
import ZipCode from './ZipCode.jsx'

class Shipping1 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      zip: 95131,
      showEnterZip: false,
      enterZip: ""
    }

    this.onClickZipCode = this.onClickZipCode.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onZipSubmit = this.onZipSubmit.bind(this);
  }

  onClickZipCode() {
    this.setState({showEnterZip: !this.state.showEnterZip})
  }

  handleInputChange (e) {
    this.setState({enterZip: e.target.value});
  }

  onZipSubmit(e) {
    event.preventDefault();
    this.setState({
      zip: e.target.zip.value,
      showEnterZip: !this.state.showEnterZip
    })
  }


  render() {
    var shipStyle = {
      color: "white",
      fontSize: "12px",
      backgroundColor: "rgb(203, 0, 0)",
      width: "100px",
      height: "30px",
      borderRadius: "5px",
      textAlign: "center",
      lineHeight: "30px",
      display: "inline-block",
      margin: 15,
      cursor: "pointer"
    }

    return (
      <div>
        Shipping to
          <span type="button" onClick={this.onClickZipCode.bind(this)}> {this.state.zip}</span>
          <span style={shipStyle}>Ship It</span>
          {this.state.showEnterZip ?
            <ZipCode
              onZipSubmit={this.onZipSubmit}
              handleInputChange={this.handleInputChange}
              enterZip={this.state.enterZip}
            /> : null}
      </div>
    )
  }
}


export default Shipping1;
