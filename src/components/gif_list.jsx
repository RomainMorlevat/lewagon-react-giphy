import React, { Component } from 'react';

import Gif from './gif.jsx';

class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} setCurrentGifFunction={this.props.setCurrentGifFunction}/>);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
