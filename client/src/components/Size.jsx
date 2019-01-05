import React from 'react';


class Size extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var sizeStyle = {
      display: "inline-block",
      fontSize: "10px",
      fontFamily: "Verdana",
      borderStyle: "solid",
      borderColor: "rgb(217, 215, 210)",
      borderRadius: "5px",
      borderWidth: "1px",
      margin: 5,
      padding: 6,
      cursor: "pointer"
    }
    var descriptionStyle = {
      fontFamily:"Arial Black",
      fontSize: "14px"
    }

    return (
      <span style={descriptionStyle}>
        <span style={sizeStyle} name="size" onClick={() => this.props.onClickSize(this.props.size)}> {this.props.size}</span>
      </span>
    )
  }
}


export default Size;
