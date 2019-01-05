import React from 'react';

class Color extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var color = {

      'black': {
        backgroundColor: "rgb(44, 44, 44)"
      },
      'silver': {
        backgroundColor: "rgb(191, 192, 197)"
      },
      'gold': {
        backgroundColor: "rgb(252, 230, 209)"
      },
      'pink': {
        backgroundColor: "rgb(255, 221, 217)"
      }
    }

    var colorBox = {
      width: "40px",
      height: "40px",
      borderStyle: "solid",
      borderWidth: "thin",
      borderRadius:"5px",
      borderColor: "rgb(217, 215, 210)",
      display: "inline-block",
      margin: 5,
      cursor: "pointer"
    }
    var descriptionStyle = {
      fontFamily:"Arial Black",
      fontSize: "14px"
    }

    return (
      <span>
        <span style={Object.assign(color[this.props.color], colorBox)} onClick={()=>this.props.onClickColor(this.props.color)}></span>
      </span>
    )
  }
}

export default Color;


