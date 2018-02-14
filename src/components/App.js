import React, {PropTypes} from 'react';
import Main from './child-components/Main';
import {apiKey} from '../apiKey';

// store - redux
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as gifActions from '../actions/gifActions';
import * as historyActions from '../actions/historyActions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: Object.assign({}, this.props.gifs),
      history: Object.assign({}, this.props.history)
    };

    this.searchGIF = this.searchGIF.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      gifs: Object.assign({}, nextProps.gifs),
      history: Object.assign({}, nextProps.history)
    });
  }

  searchGIF(searchText) {
    const giphyPromise =     fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchText}&limit=25&offset=0&rating=G&lang=en`);

    giphyPromise.then(data => data.json()).then(gifs => {
      return this.setState({gifs: gifs.data});
    });
  }

  render() {
    return (
      <Main
        searchGIF={this.searchGIF}
        loading={this.props.loading}
        gifs={this.state.gifs}
        history={this.state.history}
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
    loading: state.ajaxCallsInProgress > 0,
    history: state.history
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({gifActions, historyActions}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
