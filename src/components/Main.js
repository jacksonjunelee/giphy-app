import React from 'react';
import { Link } from 'react-router';
import Grid from './child-components/Grid';

class Main extends React.Component {
  render() {
    let view;

    if (this.params.postId) {
      view = <Single />
    } else {
      <Grid />
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
