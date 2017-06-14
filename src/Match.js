import React, { Component } from 'react';
import Request from 'superagent';
import './Match.css';
import { Table } from 'react-bootstrap';

class Match extends Component {
  constructor() {
    super();

    this.state = {
      isGreen:'true',
      name:'Chankyu',
      data:'Data',
      champName:'loading',
      team1:[],
      team2:[],
      winner:'loading',
    }
  }

  componentWillMount() {

    //console.log("GAMEDATA: ");
    //console.log(gameData);
    let teamOne = [];
    for(let i = 0; i < 5; i++) {
      teamOne.push(this.props.gameData.participantIdentities[i].player.summonerName);
    }
    this.setState({
      team1:teamOne
    });

    let teamTwo = [];
    for(let j = 5; j < 10 ; j++) {
      teamTwo.push(this.props.gameData.participantIdentities[j].player.summonerName);
    }
    this.setState({
      team2:teamTwo
    });

    this.setState({
      winner: this.props.gameData.teams[0].win==="Win" ? "Team 1 Won!" : "Team 2 Won!"
    })


  }

    render() {
      console.log("THIS IS TEAM 1");
      console.log(this.state.team1);
      let playerList1 = this.state.team1.map(function(name) {
        return <tr><td>{name}</td></tr>;
      });

      let playerList2 = this.state.team2.map(function(name2) {
        return <tr><td>{name2}</td></tr>;
      });

      return (
        <div id="wrapper">
          <h3>{this.state.winner}</h3>
          <h4>You Played: {this.state.champName}</h4>
          <div id="first">
            <Table striped bordered condensed hover>
              <thead>
              <tr>
                <th id="tableTitle">Team 1</th>
              </tr>
              </thead>
              <tbody>
              {playerList1}
              </tbody>
            </Table>
          </div>
          <div id="second">
            <Table striped bordered condensed hover>
              <thead>
              <tr>
                <th id="tableTitle">Team 2</th>
              </tr>
              </thead>
              <tbody>
              {playerList2}
              </tbody>
            </Table>
          </div>

        </div>
      )
    }
  }

export default Match;
