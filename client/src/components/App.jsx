import React from 'react';
import StarRatings from 'react-star-ratings';
import Stars from './Stars.jsx';
import PlanDetails from './PlanDetails.jsx';
import Color from './Color.jsx';
import Size from './Size.jsx';
import Quantity from './Quantity.jsx';
import Shipping from './Shipping.jsx';
import Shipping1 from './Shipping1.jsx';
import axios from 'axios';



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      showResults: false,
      displayColor: '',
      displaySize: '',
      hover: false
    }

    this.onClickColor = this.onClickColor.bind(this);
    this.onClickSize = this.onClickSize.bind(this);
  }

  componentDidMount () {

    var enteredId = Number(window.location.pathname.split('/')[1]);

    axios.get(`/api/item/${enteredId}`)
      .then((res) => this.setState({items: res.data}))
      .catch((err) => console.log('error: ', err))

    // fetch('/api/item/1')
    //   .then(response => response.json())
    //   .then(data => this.setState({items: data}))
  }

  onClickColor (event) {

    if(event === 'black') {
      this.setState({displayColor: 'Black'})
    } else if (event === 'silver') {
      this.setState({displayColor: 'Space Gray'})
    } else if (event === 'gold') {
      this.setState({displayColor: 'Gold'})
    } else if (event === 'pink') {
      this.setState({displayColor: 'Rose Gold'})
    }
  }

  onClickSize (event) {
    this.setState({displaySize: event})
  }

    handleMouseIn() {
      this.setState({ hover: true })
    }

    handleMouseOut() {
      this.setState({ hover: false })
    }
  render() {

    var priceStyle = {
      fontSize: "30px",
      fontFamily:"Arial",
      fontWeight: "bold"
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

    var descriptionStyle = {
      fontFamily:"Arial Black",
      fontSize: "14px",
      textAlign: "center"
    }

    return (
      <div>
        <div style={priceStyle}>{this.state.items.price}</div>
        <div style={{borderBottom: "solid #dcdcdc"}}>

          <Stars rating={this.state.items.averageRating} />
          <span style={totalRatingStyle}>{this.state.items.totalRatings} </span>
          <span style={questionStyle}>{this.state.items.totalQuestions} Questions</span>
        </div>

        <PlanDetails />

        <div style={descriptionStyle}>Color <span style={{fontFamily: "Arial"}}>{this.state.displayColor}</span>
          <div style={{textAlign: "center"}}>
            {this.state.items && this.state.items.colors && this.state.items.colors.map(color =>
              <Color
                key={color}
                color={color}
                onClickColor={this.onClickColor}
              />
            )}
          </div>
        </div>
        <div style={descriptionStyle}>Size <span style={{fontFamily: "Arial"}}>{this.state.displaySize}</span>
          <div style={{textAlign: "center"}}>
            {this.state.items && this.state.items.sizes && this.state.items.sizes.map(size =>
              <Size
                key={size}
                size={size}
                onClickSize={this.onClickSize}
              />
            )}
          </div>
        </div>
        <Quantity
          quantity={this.state.items.quantityCanBuy}
        />

        <Shipping1 />

      </div>
    )
  }
}

export default App;
