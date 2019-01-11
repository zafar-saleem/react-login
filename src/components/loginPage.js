import React, { Component } from 'react';
import { Link } from 'react-router';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <h3>Login Page</h3>
        Don't have account? <Link to='register'>Register here</Link>
      </div>
    );
  }
}

export default LoginPage;