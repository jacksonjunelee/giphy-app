import React from 'react';
import { Link } from 'react-router';
import Grid from './Grid';
import Single from './Single';
import Search from './Search';
import {apiKey} from '../../apiKey';
import History from './History';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Giphy App</Link>
        </h1>
        <div>
          <Search
            searchGIF={this.props.searchGIF}
          />
          <div className="history-grid">
            <div className="grid-container">
              <Grid
                gifs={this.props.gifs}
              />
            </div>
            <div className="history-container">
              <History
                history={this.props.history}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
