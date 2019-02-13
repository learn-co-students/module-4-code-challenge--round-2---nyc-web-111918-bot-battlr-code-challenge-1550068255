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


  render() {
    console.log(this.state.botArmy)
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy}/>

        <BotCollection bots={this.state.allBots} botClick={this.botClick} />
      </div>
    );
  }

}

export default BotsPage;
