import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class TodoInput extends Component {
  state = {
    value: '',
  }
  // onchangeHandler = event => this.setState({ value: event.target.value });
  onchangeHandler = ({ target: { value } }) => this.setState({ value });

  onKyeDownHandler = ({ keyCode }) => {
    if (keyCode === 13) {
      this.props.addTodo(this.state.value);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <input
        value={this.state.value}
        onChange={this.onchangeHandler}
        onKeyDown={this.onKyeDownHandler}
      />
    );
  }
}


TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
