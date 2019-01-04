import React from 'react';

class ZipCode extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showZipInput: true
    }
  }

  render() {

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

    return (
      <div>
        <form id="enterZipcode">
          <input  type="text" name="zip" value={this.props.enterZip} placeholder="enter your zip code" onChange={() => this.props.handleInputChange(event)} required/>
          <input id="submitZip" type="submit" value="submit" onClick={() => this.props.onZipSubmit()} style={submitStyle} />
          <input id="cancelZip" type="submit" value="cancel" style={cancelStyle} />
        </form>
      </div>
    )
  }
}


export default ZipCode;