import React from 'react';

class History extends React.Component {
  render() {
    return (
      <div>
        {
          Object.keys(this.props.history).map( key => (
            <p key={key}
              onClick={() => this.props.updateSearch(this.props.history[key])}>
              {this.props.history[key]}
            </p>
          ))
        }
      </div>
    )
  }
}

export default History;
