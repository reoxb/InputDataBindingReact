import React, { Component } from 'react';

class InputBox extends Component {
  
  update() {
    var modifiedValue = this.refs.inputValue.getDOMNode().value;
		this.props.updateValue(modifiedValue);
  }

  render() {
    return (
      <input type="text" ref="inputValue" className="form-control input-lg" placeholder="Write some text..."
        value={this.props.value} onChange={this.update} />
    );
  }
}

export default InputBox;
