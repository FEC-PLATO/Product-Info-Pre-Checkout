import React from 'react';
import $ from 'jquery';

class Shipping extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      zipcode : 95131
    }
  }

  onClickZip() {
    $("#zipcode").click(function(){
        $("#enterZipcode").toggle();
    });
  }

  // onChangeZip(event) {
  //   console.log(event.target.value)
  // }

  onSubmitZip(event){

    event.preventDefault();

    $("#submitZip").click(function(){
        $("#enterZipcode").toggle();
    });
    // console.log(event.target.zip.value)
    this.setState({zipcode: event.target.zip.value});
  }

  onClickCancel() {
    $("#cancelZip").click(function(){
      $("#enterZipcode").toggle();
    });
    this.setState({zipcode: this.state.zipcode})
  }

  render() {

    var formStyle = {
      display: "none"
    }
    var submitStyle = {
      display: "inline-block",
      color: "white",
      fontSize: "10px",
      backgroundColor: "rgb(203, 0, 0)",
      borderRadius: "5px",
      borderColor: "rgb(203, 0, 0)",
      textAlign: "center",
      height: "20px",
      margin: 5,
      cursor: "pointer"
    }
    var cancelStyle = {
      color: "black",
      fontSize: "10px",
      backgroundColor: "white",
      borderRadius: "5px",
      borderColor: "black",
      textAlign: "center",
      height: "20px",
      cursor: "pointer"
    }
    var descriptionStyle = {
      fontSize: "12px",
      fontFamily:"Verdana",
      whiteSapce: "pre"
    }
    var underlineZip = {
      textDecoration: "underline",
      cursor: "pointer"
    }

    return (
      <div style={descriptionStyle}>
        Shipping to
        <span type="button" id="zipcode" onClick={this.onClickZip.bind(this)} style={underlineZip}> {this.state.zipcode}</span>
        <form id="enterZipcode" onSubmit={this.onSubmitZip.bind(this)} style={formStyle}>
          <input  type="text" name="zip" placeholder="enter your zip code" required/>
          <input id="submitZip" type="submit" value="submit" style={submitStyle} />
          <input id="cancelZip" type="submit" value="cancel" onClick={this.onClickCancel.bind(this)} style={cancelStyle} />

        </form>
      </div>
    )
  }
}


export default Shipping;