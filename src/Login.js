import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, HelpBlock, Button} from 'react-bootstrap';
import { postLoginDetails } from './api/login';


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup className="txtbar" controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };

    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  handleEmailInput(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordInput(event) {
    this.setState({password: event.target.value});
  }

  onLogin() {
    postLoginDetails(this.state.email, this.state.password).then(res => console.log(res));
  }

  render () {
    return (
      <form>
      <FieldGroup
          id="formControlsEmail"
          type="email"
          label="Email address"
          value={this.state.email}
          onChange={this.handleEmailInput}
          placeholder="Enter Email"
        />
        <FieldGroup
          id="formControlsPassword"
          label="Password"
          type="password"
          onChange={this.handlePasswordInput}
          value={this.state.password}
          placeholder="Enter password"
          required="true"
        />
        <Button className="btnt" onClick={this.onLogin}>
          Login
        </Button>
      </form>
    );
  }
}
