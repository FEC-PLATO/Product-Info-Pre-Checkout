import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar} from '@fortawesome/free-regular-svg-icons';
import { faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';


class Stars extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    // const starPercentage = starRating / 5 * 100;
    // const starPercentageRounded = `${Math.round(starPercentage.toFixed(1) / 10) * 10}%`
    var roundToHalf = function(num) {
      return Math.round(num * 2) / 2;
    }

    var starRating = roundToHalf(this.props.rating);

    var getStars = function () {

      var starArr = [];
      var filledStar = <FontAwesomeIcon icon={fasFaStar} />;
      var unfilledStar = <FontAwesomeIcon icon={farFaStar} />
      var halfFilledStar = <FontAwesomeIcon icon={faStarHalfAlt} />

      if (Number.isInteger(starRating)) {

        for (var i = 1; i <= starRating; i++) {
          starArr.push(filledStar);
        }
        for (var i = 1; i <= 5 - starRating; i++) {
          starArr.push(unfilledStar);
        }
      } else {

        for (var i = 1; i <= Math.floor(starRating); i++) {
          starArr.push(filledStar);
        }
        starArr.push(halfFilledStar);

        for (var i = 0; i <= 5 - starArr.length; i++) {
          starArr.push(unfilledStar);
        }
      }
      return starArr;
    }


    var starStyle = {
      color: "rgb(255, 214, 0)",
      fontSize:"20px"
    }

    return (
      <span style={starStyle}>
        {getStars()}
      </span>

    )
  }
}


export default Stars;
