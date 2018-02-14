import React, {PropTypes} from 'react';
import Main from './child-components/Main';
import {apiKey} from '../apiKey';

// store - redux
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as gifActions from '../actions/gifActions';

class App extends React.Component {
  // constructor(props, context) {
  //   super(props, context);
  //
  //   this.state = {
  //     gifs: Object.assign({}, this.props.gifs),
  //     errors: {},
  //     saving: false
  //   };
  // }

  // searchGIF(searchText) {
  //   const giphyPromise =     fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchText}&limit=25&offset=0&rating=G&lang=en`);
  //
  //   giphyPromise.then(data => data.json()).then(gifs => {
  //     return this.setState({gifs: gifs.data});
  //   });
  // }

  render() {
    return (
      <Main
        loading={this.props.loading}
        gifs={this.props.gifs}
        postId={this.props.params.postId}
      />
    )
  }
}

App.propTypes = {
  gifs: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    gifs: state.gifs,
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gifActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
