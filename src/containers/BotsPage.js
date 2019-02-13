import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const botData = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {

  state = {
    bots: [],
    myBots: [],
  }

  componentDidMount() {
    fetch(botData)
    .then(r => r.json())
    .then(botsData => {
      this.setState({ bots: botsData })
    })
  }

  addToMyBots = botObj => {
    if(!this.state.myBots.includes(botObj)) {
      this.setState({ myBots: [...this.state.myBots, botObj] })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} />
        <BotCollection addToMyBots={this.addToMyBots} bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
