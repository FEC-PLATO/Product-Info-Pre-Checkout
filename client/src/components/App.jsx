import React from 'react';
import StarRatings from 'react-star-ratings';

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
      fontSize: "50px",
      padding: 20,
      margin: 10
    }

    return (
      <div>
        <div style={priceStyle}>{this.state.items.price}</div>
        <div>
          <StarRatings
            rating={this.state.items.averageRating}
            starDimension="20px"
            starSpacing="2px"
            starRatedColor="yellow"
            numberOfStars={5}
          />
          <span>{this.state.items.averageRating} </span>
          <span>{this.state.items.totalRatings} </span>
          <span>{this.state.items.totalQuestions} Questions</span>
        </div>
        <div>{this.state.items.colors}</div>
        <div>{this.state.items.sizes}</div>
        <div>zipcode</div>
      </div>
    )
  }
}

export default App;