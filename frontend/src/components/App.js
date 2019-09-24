import React from 'react';
import axios from 'axios';
import './App.css';
import '../css/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import About from '../pages/About';
import Account from '../pages/Account';
import Home from '../pages/Home';
import Snippet from '../pages/Snippets';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: '' };
  }

  insertAuthor = async author =>
    axios.post('http://localhost:5000/api/signup', author);
  loginAuthor = async author => {
    const { data } = await axios.patch(
      'http://localhost:5000/api/login',
      author
    );
    this.setState({ message: data.message });
  };

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
            path="/signup"
            render={() => <SignupForm onSubmit={this.insertAuthor} />}
          />
          <Route
            path="/login"
            render={() => (
              <LoginForm
                onSubmit={this.loginAuthor}
                success={this.state.message}
              />
            )}
          />
          <Route
            render={() => <h1>You are in the wrong place! Buyers Beware!</h1>}
          />
          )} />
        </Switch>
      </Router>
    );
  }
}

export default App;
