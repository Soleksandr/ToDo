import React from 'react';
import TaskStatus from './TaskStatus';
import TextField from './TextField';
import Button from './Button';

class TaskItem extends React.Component {
  state = {
    title: this.props.title,
  };

  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  }

  onInputBlur = () => {
    this.props.onBlur(this.state.title, this.props.index);
  }

  onRemoveClick = () => {
    this.props.onClick(this.props.index);
  }
  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-sm-8">
            <TextField
              type="text"
              className="task-item form-control input-lg"
              value={this.state.title}
              onChange={this.onChangeTitle}
              onBlur={this.onInputBlur}
            />
          </div>
          <div className="col-sm-2">
            <TaskStatus className="checkbox-inline" />
          </div>
          <div className="col-sm-2">
            <Button
              className="btn btn-danger"
              type="button"
              value="remove"
              onClick={this.onRemoveClick}
            />
          </div>
        </div>
      </li>);
  }
}

export default TaskItem;
