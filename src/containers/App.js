import React from 'react';
import './App.css';
import Card from '../components/card.js';
import CardList from '../components/cardlist.js';
import SearchBox from '../components/SearchBox.js';
import { cpus } from 'os';
import Jsonfetcher from '../components/Jsonfetcher.js' 

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      searchfield:"",
      people:{}
    }
  }

  componentDidMount(){

  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
    fetch(`https://swapi.co/api/people/${event.target.value}`)
    .then(response=>response.json())
    .then(data=>this.setState({people:data}))
}
  
  render(){
   return <div>
    <SearchBox searchChange={this.onSearchChange}/>
   <Card name={this.state.people.name} height={this.state.searchfield}/>
   </div> 
  }

}

export default App

