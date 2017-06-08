import React, { Component } from 'react';
import './GameItemList.css';

class GameItemList extends Component {
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

  renderMatch

  render() {
    var status = "Neolucid"
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
      );
  }

}

export default GameItemList;
