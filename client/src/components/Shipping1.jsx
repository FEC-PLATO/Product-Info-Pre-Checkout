import React from 'react';
import ZipCode from './ZipCode.jsx';
import ShippingDate from './ShippingDate.jsx';
import Tooltip from 'react-simple-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';


class Shipping1 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      zip: 95131,
      showEnterZip: false,
      enterZip: "",
      showShipDate: true
    }

    this.onClickZipCode = this.onClickZipCode.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onZipSubmit = this.onZipSubmit.bind(this);
    this.onClickCancel = this.onClickCancel.bind(this);
  }

  onClickZipCode() {
    this.setState({
      showEnterZip: !this.state.showEnterZip,
      showShipDate: !this.state.showShipDate
    })
  }

  handleInputChange (e) {
    this.setState({enterZip: e.target.value});
  }

  onZipSubmit(e) {
    event.preventDefault();
    this.setState({
      zip: e.target.zip.value,
      showEnterZip: !this.state.showEnterZip,
      showShipDate: !this.state.showShipDate,
      enterZip: ""
    })
  }

  onClickCancel() {
    this.setState({
      showEnterZip: !this.state.showEnterZip,
      showShipDate: !this.state.showShipDate
    })
  }


  render() {

    var underlineZip = {
      textDecoration: "underline",
      cursor: "pointer"
    }

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

    var descriptionStyle = {
      fontSize: "12px",
      fontFamily:"Verdana",
      backgroundColor: "rgb(247, 247, 247)",
      padding: 5,
    }

    var checkStoreStyle = {
      fontSize: "10px",
      fontFamily: "Verdana",
      color: "black",
      borderRadius: "5px",
      borderColor: "black",
      borderWidth: "1px",
      textAlign: "center",
      height: "25px",
      margin: 8,
      cursor: "pointer"
    }

    var shipItStyle = {
      color: "white",
      fontSize: "12px",
      backgroundColor: "rgb(203, 0, 0)",
      width: "100px",
      height: "30px",
      borderRadius: "5px",
      textAlign: "center",
      lineHeight: "30px",
      display: "inline-block",
      marginTop: 10,
      marginLeft: 20,
      marginBottom: 5,
      cursor: "pointer"
    }

    var checkStoreStyle = {
      fontSize: "10px",
      fontFamily: "Verdana",
      color: "black",
      backgroundColor: "rgb(247, 247, 247)",
      borderRadius: "5px",
      borderColor: "black",
      borderWidth: "1px",
      textAlign: "center",
      height: "25px",
      marginTop: "10px",
      marginLeft: "-3px",
      cursor: "pointer"
    }

    return (
      <div>

        <div style={descriptionStyle}>
          <span style={{marginRight: "4px"}}>Shipping to</span>
          <span type="button" onClick={this.onClickZipCode.bind(this)} style={underlineZip}>{this.state.zip}</span>
          <span style={shipStyle}>Ship It</span>
          {this.state.showEnterZip ?
            <ZipCode
              onZipSubmit={this.onZipSubmit}
              handleInputChange={this.handleInputChange}
              enterZip={this.state.enterZip}
              onClickCancel={this.onClickCancel}
            /> : null}
        </div>
        <div>
          {this.state.showShipDate ? <ShippingDate /> :null}
        </div>

        <div style={{color: "white", fontSize: "7.5px"}}>X</div>

        <div style={descriptionStyle}>
          <span>Free ship to store</span>
          <div style={shipItStyle}>Pick it up</div>
          <div style={{color: "rgb(1, 131, 0)"}}>Get it by Sat, Jan 5 </div>
          <span>at San Jose South </span>
          <Tooltip
            content="5630 Cottle Rd San Jose 95123"
            fontSize="10px"
            padding={5}
            radius={4}>
            <span style={{cursor: "pointer"}}><FontAwesomeIcon icon={faQuestionCircle} /></span>
          </Tooltip>
          <div>
            <input id="checkStores" value= "Check other stores" style={checkStoreStyle} />
          </div>
        </div>
      </div>
    )
  }
}


export default Shipping1;
