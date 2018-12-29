import React from 'react';

class Quantity extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var quantityArr = [];

    for (var i = 1; i <= this.props.quantity; i++) {
      quantityArr.push(i);
    }

    return (
      <div>
      Quantity:
        <select>
          {quantityArr.map(num => {
            return <option>{num}</option>
          })}
        </select>
      </div>
    )
  }
}

export default Quantity;