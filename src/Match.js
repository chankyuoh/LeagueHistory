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
    }
  }

  componentWillMount() {
    let req = "https://na1.api.riotgames.com/lol/static-data/v3/champions/"+this.props.champ + "?api_key=d8061f4f-984d-46ac-8607-ed56be8f8a84";
    Request.get(req).then((response) => {
      var champData= JSON.parse(response['text']);
      console.log(champData.name);
      this.setState({
        champName:champData.name,
      })
    });

    let url = "https://na1.api.riotgames.com/lol/match/v3/matches/"+this.props.game + "?api_key=d8061f4f-984d-46ac-8607-ed56be8f8a84";
    Request.get(url).then((response2) => {
      let gameData= JSON.parse(response2['text']);
      let team1 = [];
      let team2 = [];
      console.log(gameData);
      for(let i = 0; i < 5; i++) {
        this.setState({
          team1:[...this.state.team1,gameData.participantIdentities[i].player.summonerName],
        });
      }
      for(let j = 5; j < 10 ; j++) {
        this.setState({
          team2:[...this.state.team2,gameData.participantIdentities[j].player.summonerName],
        })
      };

    });
  }

  displayTeam() {
    let res = "";
    for (let i = 0; i < this.state.team1.length; i++) {
      res += this.state.team1[i];
      res += "\n";
    }
    res += "\n\n";
    for (let i = 0; i < this.state.team2.length; i++) {
      res += this.state.team2[i];
      res += "\n";
    }
    return res;
  }

    render() {
      let playerList1 = this.state.team1.map(function(name) {
        return <tr><td>{name}</td></tr>;
      });

      let playerList2 = this.state.team2.map(function(name2) {
        return <tr><td>{name2}</td></tr>;
      });
      const tableInstance = (
        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th>#</th>
            <th>Player Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </Table>
      );
      return (
        <div id="wrapper">
          <h3>You Played: {this.state.champName}</h3>
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
