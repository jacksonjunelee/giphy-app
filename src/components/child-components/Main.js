import React from 'react';
import { Link } from 'react-router';
import Grid from './Grid';
import Single from './Single';
import Search from './Search';
import {apiKey} from '../../apiKey';

class Main extends React.Component {
  constructor() {
    super();
  }

  searchGIF(searchText) {
    const giphyPromise =     fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchText}&limit=25&offset=0&rating=G&lang=en`);

    giphyPromise.then(data => data.json()).then(gifs => {
      return this.setState({gifs: gifs.data});
    });
  }

  render() {
    let view;

    if (this.props.postId) {
      view = <Single />
    } else {
      view =
      <div>
        <Search
          searchGIF={this.searchGIF}
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
