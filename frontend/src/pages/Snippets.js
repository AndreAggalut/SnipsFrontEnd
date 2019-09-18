import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SnipList from '../components/SnipList';
import SearchBar from '../components/SearchBar';
import SnipForm from '../components/SnipForm';

export default class Snippets extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      snippets: [],
    };
  }
  async componentDidMount() {
    const { data } = await axios.get('http://localhost:5000/api/snippets');
    this.setState({
      snippets: data,
    });
  }
  fetchSnippets = async searchText => {
    // fetch snippets from database
    const { data: snippets } = await axios.get(
      'http://localhost:5000/api/snippets'
    );
    // inner function for string matching
    const matchStr = (str, toMatch) =>
      str.toLowerCase().includes(toMatch.toLowerCase());
    // filter them

    const filteredSnips = snippets.filter(
      snippet =>
        matchStr(snippet.title || '', searchText) ||
        matchStr(snippet.description || '', searchText) ||
        matchStr(snippet.code || '', searchText) ||
        matchStr(snippet.language || '', searchText)
    );
    // set state
    this.setState({
      snippets: filteredSnips,
    });
  };

  createSnip = async newSnip => {
    // fetch snippets from database
    console.log(newSnip);
    await axios.post('http://localhost:5000/api/snippets', newSnip);
    const { data: snippets } = await axios.get(
      'http://localhost:5000/api/snippets'
    );
    console.log(snippets);
    this.setState({
      snippets,
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar onSearch={this.fetchSnippets} />
        <SnipForm onSubmit={this.createSnip} />
        <SnipList snippets={this.state.snippets} />
      </React.Fragment>
    );
  }
}
