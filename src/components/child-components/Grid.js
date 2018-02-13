import React from 'react';
import Single from './Single';

class Grid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        {
          Object.keys(this.props.gifs).map( key => (
            <Single
              key={key}
              index={key}
              gif={this.props.gifs[key]}
            />
          ))
        }
      </div>
    )
  }
}

export default Grid;
