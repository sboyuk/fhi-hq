import React from 'react';
import { connect } from 'react-redux';

import SignUp from '../../components/sign-up/sign-up.component';
import FormInput from '../../components/form-input/form-input.component';
import RectangularButton from '../../components/rectangular-button/rectangular-button.component';
import { CardContainer } from '../../components/card/card.styles';


import { auth } from '../../firebase/firebase.utils';
import { setCurrentUser } from '../../redux/user/user.actions';


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

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = event => {

    const { value, name } = event.target;
    this.setState({ [name]: value });

  }

  render() {
    return (
      <div>
        <CardContainer>
          <form onSubmit={this.handleSubmit}>
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
            <RectangularButton type='submit' >SIGN IN</RectangularButton>
            {/* <RectangularButton onClick={signInWithGoogle} >SIGN IN WITH GOOGLE</RectangularButton> */}
          </form>
        </CardContainer>
        <CardContainer>
          <SignUp />
        </CardContainer>
      </div>



    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(SignInPage);