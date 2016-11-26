import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.refresh = this.refresh.bind(this);
    this.state = { value: 'Dato inicial' };
  }

  refresh() {
    this.setState({
      value: this.refs.value.value
    });
  }

  render() {
    return (
      <div className="App">
        <div id="loginModal" className="modal show" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title"><strong>React</strong></h1>
              </div>
              <div className="modal-body">
                <img src={logo} className="App-logo" alt="logo" />
                <form className="form col-md-12 center-block">
                  <div className="form-group">
                    <h2>Welcome to React!</h2>
                  </div>
                  <div className="form-group">
                    <input type="text" ref="value" value={this.state.value} onChange={this.refresh}
                      className="form-control input-lg" placeholder="Write some text..." />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <hr />
                <p className="App-intro">
                  {this.state.value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
