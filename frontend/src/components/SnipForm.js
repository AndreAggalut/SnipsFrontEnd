import React from 'react';

export default class SnipForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: 'Roberto',
      title: '',
      language: '',
      description: '',
      code: '',
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <p>Title</p>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <p>Languages</p>
        <select
          name="language"
          value={this.state.language}
          onChange={this.handleChange}
        >
          <option>HTML</option>
          <option>CSS</option>
          <option>JavaScript</option>
          <option>SQL</option>
        </select>

        <p>Description</p>
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <p>Code</p>
        <input
          type="text"
          name="code"
          value={this.state.code}
          onChange={this.handleChange}
        />
        <button type="submit" htmlFor="addNewSnip">
          Create
        </button>
      </form>
    );
  }
}
