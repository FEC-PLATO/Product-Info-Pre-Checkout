import React from 'react';



var ShippingDate = (props) => {

  var descriptionStyle = {
    fontSize: "12px",
    fontFamily:"Verdana",
    backgroundColor: "rgb(247, 247, 247)",
    padding: 5
  }

  return (
    <div style ={descriptionStyle}>
      <span style={{color: "rgb(1, 131, 0)"}}>Get it by Mon, Jan 7 </span>
      <span>with free standard shipping</span>
    </div>
  )
}

export default ShippingDate;