import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  componentDidMount () {
  }

  render() {

    return (
      <div>
        <div>{this.state.items.price}</div>
        <div>
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