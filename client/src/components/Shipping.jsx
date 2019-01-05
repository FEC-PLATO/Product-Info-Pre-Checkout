
//DNU

// import React from 'react';
// import $ from 'jquery';

// class Shipping extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       zipcode : 95131,
//       inputZip: ""
//     }
//   }

//   onClickZip() {
//     $("#zipcode").click(function(){
//         $("#enterZipcode").toggle();
//     });

//     $("#zipcode").click(function(){
//         $("#shipDate").toggle();
//     });
//   }

//   // onChangeZip(event) {
//   //   console.log(event.target.value)
//   // }

//   onSubmitZip(event){

//     event.preventDefault();

//     $("#submitZip").click(function(){
//         $("#enterZipcode").toggle();
//     });
//     $("#submitZip").click(function(){
//         $("#shipDate").toggle();
//     });

//     this.setState({zipcode: event.target.zip.value});

//     document.getElementById("enterZipcode").reset();
//   }

//   onClickCancel() {
//     $("#cancelZip").click(function(){
//       $("#enterZipcode").toggle();
//     });

//     $("#cancelZip").click(function(){
//       $("#shipDate").toggle();
//     });
//     this.setState({zipcode: this.state.zipcode})
//   }

//   render() {

//     var formStyle = {
//       display: "none"
//     }
//     var submitStyle = {
//       display: "inline-block",
//       color: "white",
//       fontSize: "10px",
//       backgroundColor: "rgb(203, 0, 0)",
//       borderRadius: "5px",
//       borderColor: "rgb(203, 0, 0)",
//       textAlign: "center",
//       height: "20px",
//       margin: 5,
//       cursor: "pointer"
//     }
//     var cancelStyle = {
//       color: "black",
//       fontSize: "10px",
//       backgroundColor: "white",
//       borderRadius: "5px",
//       borderColor: "black",
//       textAlign: "center",
//       height: "20px",
//       cursor: "pointer"
//     }
//     var descriptionStyle = {
//       fontSize: "12px",
//       fontFamily:"Verdana",
//       backgroundColor: "rgb(247, 247, 247)",
//       padding: 5,
//     }
//     var underlineZip = {
//       textDecoration: "underline",
//       cursor: "pointer"
//     }
//     var shipItStyle = {
//       color: "white",
//       fontSize: "12px",
//       backgroundColor: "rgb(203, 0, 0)",
//       width: "100px",
//       height: "30px",
//       borderRadius: "5px",
//       textAlign: "center",
//       lineHeight: "30px",
//       display: "inline-block",
//       margin: 15,
//       cursor: "pointer"
//     }

//     var checkStoreStyle = {
//       fontSize: "10px",
//       fontFamily: "Verdana",
//       color: "black",
//       borderRadius: "5px",
//       borderColor: "black",
//       borderWidth: "1px",
//       textAlign: "center",
//       height: "25px",
//       margin: 8,
//       cursor: "pointer"
//     }

//     return (
//       <div>
//         <div style={descriptionStyle}>
//           Shipping to
//           <span type="button" id="zipcode" onClick={this.onClickZip.bind(this)} style={underlineZip}> {this.state.zipcode}</span>
//           <div style={shipItStyle}>Ship It</div>
//           <form id="enterZipcode" onSubmit={this.onSubmitZip.bind(this)} style={formStyle}>
//             <input  type="text" name="zip" placeholder="enter your zip code" required/>
//             <input id="submitZip" type="submit" value="submit" style={submitStyle} />
//             <input id="cancelZip" type="submit" value="cancel" onClick={this.onClickCancel.bind(this)} style={cancelStyle} />
//           </form>
//           <div id="shipDate">
//             <span style={{color: "rgb(1, 131, 0)"}}>Get it by Mon, Jan 7 </span>
//             <span>with free standard shipping</span>
//           </div>
//         </div>
//         <div></div>
//         <div style={descriptionStyle}>
//           <span>Free ship to store</span>
//           <div style={shipItStyle}>Pick it up</div>
//           <div style={{color: "rgb(1, 131, 0)"}}>Get it by Sat, Jan 5 </div>
//           <span>at San Jose South</span>
//           <div>
//             <input id="checkStores" value= "Check other stores" style={checkStoreStyle} />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }


// export default Shipping;
