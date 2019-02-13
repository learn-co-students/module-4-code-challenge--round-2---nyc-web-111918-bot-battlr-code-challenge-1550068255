import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = { allBots: [],
            botArmy: [] }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(bots => {
      this.setState({ allBots: bots })
    })
  }

  botClick = (botId) => {
    if (!this.state.botArmy.find(bot => bot.id === botId)) {
    const selectedBot = this.state.allBots.find(bot => bot.id === botId)
    this.setState({ botArmy: [...this.state.botArmy, selectedBot] })
  }
}

removeBot = (botId) => {
  const myArmy = this.state.botArmy.filter(bot => bot.id !== botId)
  this.setState({ botArmy: myArmy })
}


  render() {
    console.log(this.state.botArmy)
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} removeBot={this.removeBot} />

        <BotCollection bots={this.state.allBots} botClick={this.botClick}  botArmy={this.state.botArmy}/>
      </div>
    );
  }

}

export default BotsPage;
