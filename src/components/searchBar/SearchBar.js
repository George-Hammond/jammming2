import React, { Component } from 'react'
import './SearchBar.css';

export default class SearchBar extends Component {

  constructor(props){
    super(props);


    this.state = {
      
        searchTerm: ''
    }

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  

  handleTermChange(event){
    this.setState({ searchTerm: event.target.value })
  }
  
  search(){
    this.props.onSearch(this.state.searchTerm);
  }

  render() {
    return (
    <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <button className="SearchButton" onClick={this.search}>SEARCH</button>
    </div>
    )
  }
}

