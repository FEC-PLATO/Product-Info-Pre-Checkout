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

  render() {

    var formStyle = {
      display: "none"
    }

    return (
      <div>
        Shipping to :
        <span type="button" id="zipcode" onClick={this.onClickZip.bind(this)}>{this.state.zipcode}</span>
        <form id="enterZipcode" onSubmit={this.onSubmitZip.bind(this)} style={formStyle}>
          <input  type="text" name="zip" placeholder="enter your zip code" />
          <input id="submitZip" type="submit" value="submit" />
        </form>
      </div>
    )
  }
}


export default Shipping;