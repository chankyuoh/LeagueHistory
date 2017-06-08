import React, { Component } from 'react';
import Request from 'superagent';


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
      var gameData= JSON.parse(response2['text']);
      var team1 = [];
      var team2 = [];
      for(let i = 0; i < 5; i++) {
        this.state.team1.push(gameData.participantIdentities[i].player.summonerName);
      }
      for(let j = 5; j < 10 ; j++) {
        this.state.team2.push(gameData.participantIdentities[j].player.summonerName);
      }
      console.log(gameData);

    });
  }

  displayTeam() {
    var res = "";
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
      var playerList1 = this.state.team1.map(function(name) {
        return <li>{name}</li>;
      })

      var playerList2 = this.state.team2.map(function(name2) {
        return <li>{name2}</li>;
      })
      return (
        <div>
          <h3>{this.state.champName}</h3>
          <p>Match {this.props.game}</p>
          <div><p>{this.displayTeam()}</p></div>
          <ul>{playerList1}</ul>
          <hr></hr>
          <ul>{playerList2}</ul>
        </div>
      )
    }
  }

export default Match;
