import React from 'react';
import TaskItem from './TaskItem';

class TasksList extends React.Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.tasks.map((task, i) =>
          <TaskItem
            index={i}
            title={task.title}
            key={task.id}
            onBlur={this.props.onBlur}
            onClick={this.props.onClick}
          />,
        )}
      </ul>
    );
  }
}

export default TasksList;
