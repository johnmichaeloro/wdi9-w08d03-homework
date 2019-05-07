import React, {Component} from 'react';
import GiphySearch from './GiphySearch/GiphySearch';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gifs: []
    }
  }
  searchGiphy = async (formData) => {
    const searchURL = `http://api.giphy.com/v1/gifs/search?q=${formData}&api_key=vjsscA2SIUZH4ZGs7PzYcPBuzovY624R&limit=10`;
    const result = await fetch(searchURL);
    const parsedResult = await result.json();
    console.log(parsedResult);
    this.setState({
      gifs: parsedResult.data
    })
  }
  render(){
    const gifList = this.state.gifs.map((gif, index) => {
      return(
        <img src={gif.images.downsized.url} />
      )
    })
    return(
      <div>
      <h1>Giphy Search</h1>
      <GiphySearch searchGiphy={this.searchGiphy}/>
      </div>
    )
  }
}

export default App;
