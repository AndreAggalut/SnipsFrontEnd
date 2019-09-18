import React from 'react';
import './App.css';
import '../css/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import About from '../pages/About';
import Account from '../pages/Account';
import Home from '../pages/Home';
import Snippet from '../pages/Snippets';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/account" exact component={Account} />
          <Route path="/snippets" exact component={Snippet} />
          <Route
            render={() => <h1>You are in the wrong place! Buyers Beware!</h1>}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
