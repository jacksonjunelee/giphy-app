import React from 'react';

class Single extends React.Component {
  render() {
    return (
      <div className="gif-container">
        <img src={this.props.gif.images.fixed_width_downsampled.url}/>
        <p>{this.props.gif.title}</p>
      </div>
    )
  }
}

export default Single;
