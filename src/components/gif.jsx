import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    const url = event.target.currentSrc;
    const id = url.replace("https:\//media0.giphy.com/media/", "").replace("/200.gif", "");
    this.props.setCurrentGifFunction(id);
  }

  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} alt="Giphy gif" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
