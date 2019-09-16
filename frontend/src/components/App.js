import React from 'react';
import axios from 'axios';
import './App.css';
import '../css/style.css';
import SnipList from './SnipList';
import SearchBar from './SearchBar';
import SnipForm from './SnipForm';

class App extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <React.Fragment>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="snippets.html">Snippets</a>
              </li>
              <li>
                <a href="account.html">Account</a>
              </li>
            </ul>
          </nav>
        </header>
        <SearchBar onSearch={this.fetchSnippets} />
        <SnipList snippets={this.state.snippets} />
        <SnipForm onSubmit={this.state.addNewSnip} />
      </React.Fragment>
    );
  }
}
export default App;
