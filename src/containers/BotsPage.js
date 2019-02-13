import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const botAPI = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  state = {
    bots: [],
    army: []
  }

  componentDidMount() {
    fetch(botAPI)
    .then(res=> res.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  isNotIncluded = (id) =>
  !this.state.army.find(bot => bot.id === id);

  handleAddClick = (id) => {
    const foundBot = this.state.bots.find(bot => bot.id === id)
    if (this.isNotIncluded(id)) {
      this.setState({
        army: [...this.state.army, foundBot]
      }, () => console.log(this.state.army))
    }
  }

  handleRemovalClick = (id) => {
    const newArmy = this.state.army.filter( bot => bot.id !== id)
    this.setState({
      army: newArmy
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy handleClick={this.handleRemovalClick} army={this.state.army} />
        <BotCollection handleClick={this.handleAddClick} bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
