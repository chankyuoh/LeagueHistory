import React, { Component } from 'react';
import './VacancySign.css';

class VacancySign extends Component {
  constructor() {
    super();
    this.state = {
      isGreen:'true',
      name:'Chankyu',
    }
  }

  handleClick() {
    console.log('button clicked');
    console.log(this.state.isGreen);
    this.setState ({
      name:this.state.name=='Chankyu' ? 'Jen' : 'Chankyu',
      isGreen:!this.state.isGreen,
    })
  }

  render() {
    return (
      <div><p className="para">{this.props.isVacant ? 'Vacancy' : 'No Vacancy'}</p>
      <br></br>
      <hr></hr>
      <p className={"para-"+ (this.state.isGreen ? 'green' : 'normal')}>Have fun {this.state.name}</p>
      <button className='update-button' onClick={()=>this.handleClick()}></button>
     </div>
      );
  }

}

export default VacancySign;
