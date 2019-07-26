import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "3ohc11UljvpPKWeNva"
    }
  }

  search = (query) => {
    giphy('R5usAOqvR0TNPXpnDufZzhbPXhrDvToT').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  setCurrentGif = (gif_id) => {
    this.setState({ selectedGifId: gif_id})
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} setCurrentGifFunction={this.setCurrentGif} />
        </div>
      </div>
    );
  }
}

export default App;
