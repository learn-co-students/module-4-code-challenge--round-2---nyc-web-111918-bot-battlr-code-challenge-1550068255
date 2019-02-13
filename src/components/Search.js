import React,{Component} from 'react'

export default class Search extends Component {

  render() {
    return(
      <div className="ui category search">
        <div className="ui icon input">
          <input className="prompt" value={this.props.searchTerm} onChange={this.props.handleChange} type="text" placeholder="Search Bots..."/>
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div>
    )
}
}
