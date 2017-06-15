import React from 'react';

class TaskStatus extends React.Component {
  state = { isDone: false }
  statusChangeHandler = (e) => {
    const isChecked = e.target.checked;
    this.setState({ isDone: !!isChecked });
  }
  render() {
    return (
      <div className="checkbox">
        <label>
          <input
            className={this.props.className}
            type="checkbox"
            onChange={this.statusChangeHandler}
          />
          {this.state.isDone ? 'done' : 'need to do'}
        </label>
      </div>
    );
  }
}

export default TaskStatus;
