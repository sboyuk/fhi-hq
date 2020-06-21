import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import RectangularButton from '../../components/rectangular-button/rectangular-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import { CardContainer } from '../../components/card/card.styles';

class SignInPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    // const { email, password } = this.state;
  }

  handleChange = event => {

    const { value, name } = event.target;
    this.setState({ [name]: value });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardContainer>
          <h2>SIGN IN</h2>

          <FormInput 
            name="email"
            type="email" 
            placeholder="Email Address"
            value={this.state.email}
            handleChange={this.handleChange}
            required  
          />
          <FormInput 
            name="password"
            type="password" 
            placeholder="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <RectangularButton type='submit' margin='25px' >SIGN IN</RectangularButton>
          <RectangularButton onClick={signInWithGoogle} >SIGN IN WITH GOOGLE</RectangularButton>
        </CardContainer>
      </form>

    )
  }
}

export default SignInPage;