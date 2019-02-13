import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from './../components/BotSpecs'
import Search from '../components/Search';

const botAPI = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  state = {
    bots: [],
    army: [],
    clicked: false,
    foundBot: {},
    searchTerm: ''
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
        army: [...this.state.army, foundBot],
        clicked: !this.state.clicked
      }, () => console.log(this.state.army))
    }
  }

  handleRemovalClick = (id) => {
    const newArmy = this.state.army.filter( bot => bot.id !== id)
    this.setState({
      army: newArmy
    })
  }

  handleClick = (id) => {
    const foundBot = this.state.bots.find(bot=> bot.id === id)
    this.setState({
      foundBot: foundBot,
      clicked: !this.state.clicked
    })

  }

  displaySettings = () => {
    if (this.state.clicked === false) {
      return <BotCollection handleClick={this.handleClick} bots={this.filteredBots()}/>
    } else {
      return <BotSpecs goBack={this.handleClick} enlistClick={this.handleAddClick} bot={this.state.foundBot} />
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      searchTerm: event.target.value
    })
  }

  filteredBots = () => {
    return this.state.bots.filter(bot =>
      bot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }


  render() {
    return (
      <div>
        <YourBotArmy handleClick={this.handleRemovalClick} army={this.state.army} />
        <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm}/>
        {this.displaySettings()}
      </div>
    );
  }

}

export default BotsPage;
