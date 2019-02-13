import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from "../components/BotSpecs";
import Search from "../components/Search";

const botData = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {

  state = {
    bots: [],
    myBots: [],
    clicked: false,
    clickedBot: null,
    searchTerm: "",
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

  handleAllBotsClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  botShowPage = botObj => {
    this.setState({
      clicked: !this.state.clicked,
      clickedBot: botObj
    })
  }

  removeFromMyBots = botObj => {
    const myBots = this.state.myBots.filter(bot => bot.id !== botObj.id)
    this.setState({ myBots })
  }

  handleSearchTerm = (event) => {
    const searchTerm = event.target.value
    this.setState({ searchTerm })
  }

  filteredRobots = () => {
    return this.state.bots.filter(bot => {
      return bot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }

  render() {
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleSearchTerm={this.handleSearchTerm} />        
        <YourBotArmy myBots={this.state.myBots} handleBotClick={this.removeFromMyBots} />
        {
          this.state.clicked ?
          <BotSpecs bot={this.state.clickedBot} handleBotClick={this.addToMyBots} handleAllBotsClick={this.handleAllBotsClick} />
          :
          <BotCollection handleBotClick={this.botShowPage} bots={this.filteredRobots()} />
        }
      </div>
    );
  }

}

export default BotsPage;
