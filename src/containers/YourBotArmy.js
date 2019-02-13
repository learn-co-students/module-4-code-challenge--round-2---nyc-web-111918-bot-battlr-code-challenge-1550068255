import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  displayMyBots = () => {
    return this.props.myBots.map(bot => {
      return <BotCard key={bot.id} bot={bot} handleBotClick={this.props.handleBotClick} />
    })
  }

  render(){
    console.log(this.props.myBots);
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.displayMyBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
