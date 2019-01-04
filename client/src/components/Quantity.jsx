import React from 'react';

class Quantity extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var descriptionStyle = {
      fontSize: "12px",
      fontFamily:"Verdana",
      margin: 10
    }

    var quantityArr = [];

    for (var i = 1; i <= this.props.quantity; i++) {
      quantityArr.push(i);
    }

    return (
      <div style={descriptionStyle}>
      Quantity:
        <select>
          {quantityArr.map(num => {
            return <option key={num}>{num}</option>
          })}
        </select>
      </div>
    )
  }
}

export default Quantity;