import React from 'react';
import { Link } from 'react-router';
import Grid from './Grid';
import Single from './Single';
import Search from './Search';
import {apiKey} from '../../apiKey';

class Main extends React.Component {
  render() {
    let view;

    if (this.props.postId) {
      view = <Single />
    } else {
      view =
      <div>
        <Search
          searchGIF={this.props.searchGIF}
        />
        <Grid
          gifs={this.props.gifs}
        />
      </div>
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
