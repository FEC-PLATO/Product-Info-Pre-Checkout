import React from 'react';

class Size extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displaySize: ''
    }
  }

  onClickSize (event) {
    this.setState({displaySize: event})
  }

  render() {

    var sizeStyle = {
      display: "inline-block",
      fontSize: "15px",
      borderStyle: "solid",
      borderRadius: "5px",
      borderWidth: "1px",
      margin: 5,
      padding: 5,
      cursor: "pointer"
    }

    return (
      <div>
        <div>Size: {this.state.displaySize}</div>
        <div style={sizeStyle} onClick={() => this.onClickSize('64GB')}>64GB</div>
        <div style={sizeStyle} onClick={() => this.onClickSize('256GB')}>256GB</div>
        <div style={sizeStyle} onClick={() => this.onClickSize('512GB')}>512GB</div>
      </div>
    )
  }
}


export default Size;