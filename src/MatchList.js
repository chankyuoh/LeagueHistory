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
    this.handleButton = this.handleButton.bind(this);
  }

  componentWillMount() {
    // Called first time the component is loaded into the page

    let req = "https://lzupmemmpg.execute-api.us-east-2.amazonaws.com/prod/matches";
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



  renderRecentMatches() {
    while(this.state.games != 'loading') {
      var matches = [];
      for (var i = 0; i < this.state.games.Items.length; i++) {
          //champ={this.state.games.matches[i].champion
          matches.push(<Match key={i} gameData={this.state.games.Items[i].message} />);


      }
      return matches;
    }

  }

  handleButton() {
    const awsURL = "https://lzupmemmpg.execute-api.us-east-2.amazonaws.com/prod/matches";


    let req = "https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/227497231/recent" + "?api_key=d8061f4f-984d-46ac-8607-ed56be8f8a84";
    Request.get(req).then((response) => {
      var recentGames= JSON.parse(response['text']);

    for (var i = 0; i < 20; i++) {
      if(recentGames.matches[i].queue == 420) {
        let url = "https://na1.api.riotgames.com/lol/match/v3/matches/"+recentGames.matches[i].gameId + "?api_key=d8061f4f-984d-46ac-8607-ed56be8f8a84";
        Request.get(url).then((response2) => {
          let gameData= JSON.parse(response2['text']);



          Request.post(awsURL).send(gameData).end(function(err,res) {
            if (err || !res.ok) {
              alert("oh boy error in single game");
              console.log(err);
            }
            else {
              console.log("yay sent single data");
            }
          });


        });
      }

    }
    });
    alert("Finished updating!");
  }

  render() {
    var status = "Neolucid"
    return (
      <div>
        <div className="status">{status}</div>
        <br></br>
        <hr></hr>
        <button onClick={()=>this.handleButton()}>Update AWS</button>
        <div className="board-row">
          {this.renderRecentMatches()}
        </div>

      </div>
      );
  }

}

export default MatchList;
