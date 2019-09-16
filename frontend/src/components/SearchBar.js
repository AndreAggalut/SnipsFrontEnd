import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
  }
  // uses newer arrow syntax to bind method to this
  handleChange = event => {
    // console.log(this);
    // capture the event
    const { value } = event.target;
    // update state

    this.setState({
      searchText: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.searchText);
  };

  render() {
    return (
      <form id="search-bar" onSubmit={this.handleSubmit}>
        <label htmlFor="search-text">🔍</label>
        <input
          type="text"
          id="search-text"
          name="search-text"
          value={this.state.searchText}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
