import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar} from '@fortawesome/free-regular-svg-icons';


class Stars extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    const starRating = Math.round(this.props.rating);
    // const starPercentage = starRating / 5 * 100;
    // const starPercentageRounded = `${Math.round(starPercentage.toFixed(1) / 10) * 10}%`


    var getFilledStars = function () {

      var filledStars = [];
      for (var i = 0; i < starRating; i++) {
        filledStars.push(<FontAwesomeIcon icon={fasFaStar} />)
      }
      return filledStars;
    }

    var getEmptyStars = function () {

      var emptyStars = [];
      for (var i = 0; i < (5 - starRating); i++) {
        emptyStars.push(<FontAwesomeIcon icon={farFaStar} />)
      }
      return emptyStars;
    }

    var starStyle = {
      color: "rgb(255, 214, 0)",
      fontSize:"20px"
    }

    return (
      <div style={starStyle}>
      {starRating}
        <span>{getFilledStars()}</span>
        <span>{getEmptyStars()}</span>
      </div>
    )
  }
}


export default Stars;
