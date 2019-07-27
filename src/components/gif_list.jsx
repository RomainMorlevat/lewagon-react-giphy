import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {
  renderList = () => {
    const { gifs, setCurrentGifFunction } = this.props;
    return gifs.map(({ id }) => <Gif id={id} key={id} setCurrentGifFunction={setCurrentGifFunction} />);
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
