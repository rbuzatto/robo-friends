import React, { Component } from 'react';

class SearchBox extends Component {

  state = {
    input: ''
  };
  
  onChange = e => {
    e.persist();
    this.setState(() => ({
      input: e.target.value
    })
    );
    this.props.search(e);
  };

  render() {
    return (
      <div className="pa2">
        <input 
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="search robots"
          value={this.state.input}
          onChange={this.onChange} />
      </div>
    )
  }
};

export default SearchBox;