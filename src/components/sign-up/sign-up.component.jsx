import React from 'react';

import FormInput from '../form-input/form-input.component';
import RectangularButton from '../rectangular-button/rectangular-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor () {
    super();
    
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state

    if(password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      console.log(user, displayName)
      await createUserProfileDocument(user, { displayName });

    } catch (error) {
      console.error(error)
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    console.log(name, value);

    this.setState({ [name]: value });
  }

  render() {

    const { displayName, email, password, confirmPassword } = this.state

    return(
      <div>
        <h2>CREATE A NEW ACCOUNT</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            placeholder='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            placeholder='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            placeholder='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            placeholder='Confirm Password'
            required
          />
          <RectangularButton type='submit'>SIGN UP</RectangularButton>
        </form>
      </div>
    )
  }
}

export default SignUp;