import React from 'react';
// import Single from './Single';

class Grid extends React.Component {
  constructor() {
    super();
    console.log('test')
    this.state = { };

    this.getTrendingGif = this.getTrendingGif.bind(this);

    this.getTrendingGif();
  }

  getTrendingGif() {
  }

  render() {
    return (
      <div className="photo-grid">

      </div>
    )
  }
}

export default Grid;
