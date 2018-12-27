import React from 'react';
import StarRatings from 'react-star-ratings';
import Color from './Color.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  componentDidMount () {
    console.log('LOCATION', window.location);
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
        <div>{this.state.items.colors}</div>
        <div>{this.state.items.sizes}</div>
        <div>zipcode</div>
      </div>
    )
  }
}

export default App;