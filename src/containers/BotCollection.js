import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){
    console.log(this.props);
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
        Collection of all bots
    		  {this.props.bots.map(bot => {
            return <BotCard key={bot.id} bot={bot} botClick={this.props.botClick} />
          })}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
