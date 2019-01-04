import React from 'react';

var CurrentLocation = () =>  {

  var descriptionStyle = {
    fontFamily: "Verdana",
    fontSize: "10px",
    color: "rgb(168, 87,48)",
    padding: 5
  }

  return (
    <div style={descriptionStyle}>
      Denied geolocation. Please enable it.
    </div>
  )
}

export default CurrentLocation;