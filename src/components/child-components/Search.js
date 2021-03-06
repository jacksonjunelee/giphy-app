import React from 'react';

class Search extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.searchText) {
      this.searchInput.value = '';
    }

    if (this.searchInput.value !== nextProps.searchText) {
      this.searchInput.value = nextProps.searchText;
      this.props.searchGIF(nextProps.searchText);
    }
  }

  search(event) {
    event.preventDefault();
    this.props.searchGIFHistory(this.searchInput.value);
  }

  render() {
    return (
      <div className="search-container">
        <form ref={(input) => this.searchForm = input} className="search" onSubmit={(e) => this.search(e)}>
          <input ref={(input) => this.searchInput = input} type="text" required placeholder="Search GIF" />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search;
