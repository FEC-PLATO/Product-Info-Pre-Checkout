import React from 'react';

class Color extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayColor: '',
      borderColor: ''
    }
  }

  onClickChange (event) {
    this.setState({displayColor: event});
  }

  onMouseEnterChange(event) {
    this.setState({displayColor: event});
    console.log(event);
  }

  onMouseLeaveChange(event) {
    this.setState({displayColor: ''});
    console.log(event)
  }

  render() {

    var colorBlack = {
      backgroundColor: "rgb(44, 44, 44)"
    }
    var colorSilver = {
      backgroundColor: "rgb(191, 192, 197)"
    }
    var colorGold = {
      backgroundColor: "rgb(252, 230, 209)"
    }
    var colorPink = {
      backgroundColor: "rgb(255, 221, 217)"
    }
    var colorBox = {
      width: "40px",
      height: "40px",
      border: "",
      borderRadius:"5px",
      display: "inline-block",
      margin: 5,
      cursor: "pointer"
    }
    var descriptionStyle = {
      fontFamily:"Arial Black",
      fontSize: "14px"
    }

    return (
      <div>
        <div style={descriptionStyle}>Color: {this.state.displayColor}</div>
        <div
          style={Object.assign(colorBlack, colorBox)}
          onClick= {() => this.onClickChange('Black')}
          onMouseEnter={() => this.onMouseEnterChange('enter')}
          onMouseLeave={() => this.onMouseLeaveChange('leave')}></div>
        <div
          style={Object.assign(colorSilver, colorBox)}
          onClick= {() => this.onClickChange('Silver')}></div>
        <div
          style={Object.assign(colorGold, colorBox)}
          onClick= {() => this.onClickChange('Gold')}></div>
        <div
          style={Object.assign(colorPink, colorBox)}
          onClick= {() => this.onClickChange('Pink')}></div>
      </div>
    )
  }
}

export default Color;
