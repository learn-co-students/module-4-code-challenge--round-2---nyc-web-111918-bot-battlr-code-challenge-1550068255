import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {

  displayBots = () => {
    return this.props.bots.map(bot => {
      return <BotCard key={bot.id}
        bot={bot}
        handleBotClick={this.props.handleBotClick}
      />
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.displayBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
