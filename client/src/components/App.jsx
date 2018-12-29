import React from 'react';
import StarRatings from 'react-star-ratings';
import Color from './Color.jsx';
import Size from './Size.jsx';
import Quantity from './Quantity.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  componentDidMount () {
    console.log('LOCATION', window.location.href);
    // var currentLocation = window.location.assign('http://localhost:3000/api/item/1');
    // window.location.href = 'http://localhost:3000/1';
    fetch('/api/item/1')
      .then(res => res.json())
      .then(data => this.setState({items: data}))
  }

  render() {

    var priceStyle = {
      fontSize: "50px"
    }
    var totalRatingStyle = {
      fontSize: "25px",
      display: "inline-block",
      verticalAlign: "middle",
      padding:10
    }
    var questionStyle = {
      fontSize: "20px",
      display: "inline-block",
      verticalAlign: "middle",
      padding:5
    }
    var shipItStyle = {
      color: "white",
      fontSize: "20px",
      fontWeight: "bold",
      backgroundColor: "red",
      width: "150px",
      height: "40px",
      borderRadius: "5px",
      textAlign: "center",
      lineHeight: "40px",
      display: "inline-block",
      cursor: "pointer"
    }

    return (
      <div>
        <div style={priceStyle}>{this.state.items.price}</div>
        <div>
          <StarRatings
            rating={this.state.items.averageRating}
            starDimension="30px"
            starSpacing="2px"
            starRatedColor="#ffff00"
            numberOfStars={5}
          />
          <div style={totalRatingStyle}>{this.state.items.totalRatings} </div>
          <div style={questionStyle}>{this.state.items.totalQuestions} Questions</div>
        </div>
        <Color />
        <Size />
        <Quantity
          quantity={this.state.items.quantityCanBuy}
        />
        <div>Shipping to 95131</div>
        <div style={shipItStyle}>Ship It</div>
      </div>
    )
  }
}

export default App;