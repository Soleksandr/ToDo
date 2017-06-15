import React from 'react';
import ControlPanel from './ControlPanel';
import TasksList from './TasksList';
import '../assets/App.css';

class App extends React.Component {
  state = {
    tasks: [],
    newTask: '',
  }

  onFinishTaskEditing = (editedValue, i) => {
    const tasks = [...this.state.tasks];
    tasks[i].title = editedValue;
    this.setState({ tasks });
  }

  onRemoveTask = (index) => {
    console.log(index);
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({ tasks });
  }

  validateUserInput = () => {
    if (this.state.newTask.trim()) {
      return true;
    }
    return false;
  }

  addNewTask = (e) => {
    e.preventDefault();
    if (this.validateUserInput()) {
      const task = {
        title: this.state.newTask,
        id: Number(new Date()),
      };
      this.setState({ tasks: [...this.state.tasks, task] });
    }
  }

  userInputHandler = e =>
    this.setState({ newTask: e.target.value });

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading">
              <ControlPanel
                task={this.state.newTask}
                onClick={this.addNewTask}
                onChange={this.userInputHandler}
              />
            </div>
            <div className="panel-body">
              <TasksList
                tasks={this.state.tasks}
                onBlur={this.onFinishTaskEditing}
                onClick={this.onRemoveTask}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
