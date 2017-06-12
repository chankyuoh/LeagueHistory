import React, { Component } from 'react';
import './MatchList.css';
import Match from './Match';
import Request from 'superagent';
class MatchList extends Component {
  constructor() {
    super();
    this.state = {
      isGreen:'true',
      name:'Chankyu',
      games:'loading',
    }
  }

  componentWillMount() {
    // Called first time the component is loaded into the page
    let req = "https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/227497231/recent" + "?api_key=d8061f4f-984d-46ac-8607-ed56be8f8a84";
    Request.get(req).then((response) => {
      var recentGames= JSON.parse(response['text']);
      this.setState({
        games:recentGames,
      })
    });
  }

  componentDidMount() {
    this.renderRecentMatches();
  }
  handleClick() {
    console.log('button clicked');
    console.log(this.state.isGreen);
    this.setState ({
      name:this.state.name=='Chankyu' ? 'Jen' : 'Chankyu',
      isGreen:!this.state.isGreen,
    })
  }

  renderMatch(i) {
    return <Match value={i}/>;
  }

  renderRecentMatches() {
    while(this.state.games != 'loading') {
      var matches = [];
      //console.log(this.state.games.matches);
      for (var i = 0; i < 20; i++) {
        if(this.state.games.matches[i].queue == 420) {
          matches.push(<Match key={i} game={this.state.games.matches[i].gameId} champ={this.state.games.matches[i].champion}/>);
        }

      }
      return matches;
    }

  }

  render() {
    var status = "Acerabbit"
    return (
      <div>
        <div className="status">{status}</div>
        <br></br>
        <hr></hr>
        <div className="board-row">
          {this.renderRecentMatches()}
        </div>
      </div>
      );
  }

}

export default MatchList;
