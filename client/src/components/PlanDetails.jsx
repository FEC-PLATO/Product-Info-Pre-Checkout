import React from 'react';
import Modal from 'react-awesome-modal';

class PlanDetails extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  openModal() {
    this.setState({show: true});
  }

  closeModal() {
    this.setState({show: false});
  }

  render() {

    var checkBoxStyle = {
      height: "15px",
      width: "15px",
      cursor: "pointer"
    }

    var closeStyle = {
      float: "right",
      padding: 10,
      fontSize: "25px",
      cursor: "pointer"
    }

    return(
      <div style={{fontFamily: "Verdana", fontSize:"12px"}}>
        <input type="checkbox" style={checkBoxStyle}/>
        <span>2 year Protection Plan with Accidental Damage Coverage </span>
        <span onClick={this.openModal.bind(this)} style={{fontSize:"10px", textDecoration: "underline", cursor: "pointer"}}>See plan details</span>
        <Modal visible={this.state.show} width="500" height="400" effect="fadeInUp" onClickAway={this.closeModal.bind(this)}>
          <div onClick={this.closeModal.bind(this)} style={closeStyle}>&#10006;</div>
          <div>
            <h3>See plan details</h3>
            <p>Contract Delivery: Email</p>
            <p>Benefits: Free 2-way shipping, 24/7 support, no additional cost, no deductible</p>
            <p>Support: Phone, online</p>
            <p>Includes: Accidental damage from handling coverage, Normal Wear and Tear Coverage, screen repair, electrical defects, failures due to drops, failures due to spills, mechanical defects</p>
            <p>ESP Type: Squaretrade - tablets</p>
            <p>Maximum Qualifying Item Price: 449.99</p>
            <p>Minimum Qualifying Item Price: 400</p>
            <p>Number of Years Protected: 2 years</p>
          </div>
        </Modal>
      </div>
    )
  }

}

export default PlanDetails;
