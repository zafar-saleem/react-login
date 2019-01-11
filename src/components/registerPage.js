import React, { Component } from 'react';
import { Link } from 'react-router';

class RegisterPage extends Component {
  render() {
    return (
      <div>
        <h3>RegisterPage</h3>
        Already have account? <Link to='login'>Login here</Link>
      </div>
    )
  }
}

export default RegisterPage;