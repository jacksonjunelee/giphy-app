import React from 'react';
import { Link } from 'react-router';
import Grid from './Grid';
import Single from './Single';

class Main extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    let view;

    if (this.props.postId) {
      view = <Single />
    } else {
      view = <Grid
        gifs={this.props.gifs}
      />
    }


    return (
      <div>
        <h1>
          <Link to="/">Giphy App</Link>
        </h1>
        {view}
      </div>
    )
  }
}

export default Main;
