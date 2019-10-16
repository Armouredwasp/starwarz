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
      people:{}
    }
  }

  componentDidMount(){
    fetch("https://swapi.co/api/people/1")
    .then(response=>response.json())
    .then(data=>this.setState({people:data}))
  }
  
  render(){
   return <Card name={this.state.people.name}height={this.state.people.height}mass={this.state.people.mass}birth_year={this.state.people.birth_year}gender={this.state.people.gender}/>
  }

}

export default App

