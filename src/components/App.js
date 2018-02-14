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
      history: Object.assign({}, this.props.history),
      loading: false,
      searchText: ''
    };

    this.searchGIF = this.searchGIF.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.searchGIFHistory = this.searchGIFHistory.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      gifs: Object.assign({}, nextProps.gifs),
      history: Object.assign({}, nextProps.history),
      loading: Object.assign({}, nextProps.loading),
      searchText: ''
    });
  }

  searchGIF(searchText) {
    const giphyPromise =     fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchText}&limit=25&offset=0&rating=G&lang=en`);

    this.updateSearch(searchText);

    giphyPromise.then(data => data.json()).then(gifs => {
      return this.setState({gifs: gifs.data});
    });
  }

  searchGIFHistory(searchText) {
    this.searchGIF(searchText);
    this.saveHistory(searchText);
  }

  saveHistory(searchText) {
    this.setState(prevState => ({
      history: [searchText, ...prevState.history]
    }));
  }

  updateSearch(searchText) {
    this.setState({ searchText });
  }

  render() {
    return (
      <Main
        searchGIF={this.searchGIF}
        loading={this.state.loading}
        gifs={this.state.gifs}
        history={this.state.history}
        updateSearch={this.updateSearch}
        searchText={this.state.searchText}
        searchGIFHistory={this.searchGIFHistory}
      />
    )
  }
}

App.propTypes = {
  gifs: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.array.isRequired
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
    actions: bindActionCreators(historyActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
