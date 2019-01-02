import React from 'react';
import StarRatings from 'react-star-ratings';
import Stars from './Stars.jsx';
import PlanDetails from './PlanDetails.jsx';
import Color from './Color.jsx';
import Size from './Size.jsx';
import Quantity from './Quantity.jsx';
import Shipping from './Shipping.jsx';
import axios from 'axios';

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
    axios.get('/api/item/1')
      .then((res) => this.setState({items: res.data}))
      .catch((err) => console.log('error: ', err))
  }

  render() {

    var priceStyle = {
      fontSize: "45px",
      fontFamily:"Arial Black"
    }
    var totalRatingStyle = {
      fontSize: "12px",
      fontFamily:"Verdana",
      display: "inline-block",
      verticalAlign: "middle",
      padding:10
    }
    var questionStyle = {
      fontSize: "12px",
      fontFamily:"Verdana",
      display: "inline-block",
      verticalAlign: "middle",
      padding:5
    }

    return (
      <div>
        <div style={priceStyle}>{this.state.items.price}</div>
        <div style={{borderBottom: "solid #dcdcdc"}}>
          <Stars rating={this.state.items.averageRating} />
          <StarRatings
            rating={this.state.items.averageRating}
            starDimension="30px"
            starSpacing="2px"
            starRatedColor="rgb(255, 214, 0)"
            numberOfStars={5}
          />
          <div style={totalRatingStyle}>{this.state.items.totalRatings} </div>
          <div style={questionStyle}>{this.state.items.totalQuestions} Questions</div>
        </div>
        <PlanDetails />
        <Color />
        <Size />
        <Quantity
          quantity={this.state.items.quantityCanBuy}
        />
        <Shipping />
      </div>
    )
  }
}

export default App;
