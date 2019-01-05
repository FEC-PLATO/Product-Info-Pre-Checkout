import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import CurrentLocation from './CurrentLocation.jsx'

class ZipCode extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showCurrentLocation: false
    }
    this.onClickLocation = this.onClickLocation.bind(this);
  }

  onClickLocation() {
    this.setState({showCurrentLocation: true})
  }

  render() {

    var submitStyle = {
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
      borderWidth: "0.5px",
      textAlign: "center",
      height: "20px",
      cursor: "pointer",
    }

    var currentLocationStyle = {
      textDecoration: "underline",
      fontFamily: "Verdana",
      cursor: "pointer",
      marginBottom: "25px"
    }

    return (
      <div>
        <div style={currentLocationStyle} onClick={() => this.onClickLocation()}><FontAwesomeIcon icon={faMapMarkerAlt}/>use my current location</div>
        {this.state.showCurrentLocation ? <CurrentLocation /> : null}
        <form id="enterZipcode" onSubmit={() => this.props.onZipSubmit(event)}>
          <input style={{width:"200px", height:"25px"}} type="text" name="zip" value={this.props.enterZip} placeholder="enter your zip code" onChange={() => this.props.handleInputChange(event)} required/>
          <div>
            <input type="submit" value="submit" style={submitStyle} />
            <button type="button" onClick={() => this.props.onClickCancel()} style={cancelStyle}>cancel</button>
          </div>
        </form>
      </div>
    )
  }
}


export default ZipCode;
