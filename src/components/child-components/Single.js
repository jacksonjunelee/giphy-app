import React from 'react';
// import Single from './Single';

class Single extends React.Component {
  render() {
    console.log(this.props.gif)

    return (
      <div className="gif">
        <img src={this.props.gif.images.downsized.url}/>
        <p>{this.props.gif.title}</p>
      </div>
    )
  }
}

export default Single;
