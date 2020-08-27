import React, {Component} from 'react';
import './App.css';
import CharacterList from './components/CharacterList'
import Favorites from './components/Favorites'

const baseURL = "https://rickandmortyapi.com/api/character/"

class App extends Component {

  state = {
    characters: [],
    favorites: []
  }

  componentDidMount(){
    fetch(baseURL)
      .then(response => response.json())
      .then(obj => this.setState({
        characters: obj.results
      }))
  }

  addFavorite = (character) => {
    this.setState({
      favorites: [...this.state.favorites, character]
    })
  }

  render(){
    return (
      <div className="App">
        <Favorites favorites={this.state.favorites}/>
        <CharacterList addFavorite={this.addFavorite} characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
