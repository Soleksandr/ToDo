import React from 'react';
import Button from './Button';
import TextField from './TextField.jsx';

class ControlPanel extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onClick}>
        <div className="input-group">
          <TextField
            className="form-control"
            onChange={this.props.onChange}
            value={this.props.task}
          />
          <div className="input-group-btn">
            <Button
              className="btn btn-info"
              type="submit"
              value="add"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default ControlPanel;
