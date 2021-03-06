import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { authenticate } from '../store';
import { authenticateNewUser } from '../store';
import auth from '../store/auth';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

/**
 * COMPONENT
 */

const AuthForm = (props) => {
  const { displayName, handleLogin, handleSignup, error, name, match } = props;
  const history = useHistory();

  const [pwVal, setPwVal] = useState('');
  const [confPwVal, setConfPwVal] = useState('');

  if (match.path === '/' || match.path === '/signup') {
    return (
      <div className="su">
        <div className="su-form">
          <div>
            <h2>REGISTER</h2>
          </div>
          <form onSubmit={handleSignup} name={name}>
            <div>
              <label htmlFor="username">
                <small>Username</small>
              </label>
              <input name="username" type="text" required />
            </div>
            <div>
              <label htmlFor="email">
                <small>e-mail</small>
              </label>
              <input name="email" type="email" required />
            </div>
            <div>
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input
                name="password"
                type="password"
                required
                id="password"
                onChange={(event) => setPwVal(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">
                <small>Confirm Password</small>
              </label>
              <input
                name="confirmPassword"
                type="password"
                required
                id="confirmPassword"
                onChange={(event) => setConfPwVal(event.target.value)}
              />
            </div>
            <div>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  backgroundColor: '#00ADB5',
                  borderRadius: 0,
                  '&:hover': {
                    backgroundColor: '#00ADB5',
                  },
                  width: 180,
                  height: 50,
                }}
                endIcon={<ArrowForwardIcon />}
                disabled={
                  pwVal !== '' && confPwVal !== '' && pwVal === confPwVal
                    ? false
                    : true
                }
              >
                {displayName}
              </Button>
            </div>
            <div className="li-reg">
              Already have an account?{' '}
              <span onClick={() => history.push('/login')}>Log in</span>
            </div>
          </form>
        </div>
      </div>
    );
  } else if (match.path === '/login') {
    return (
      <div className="li">
        <div className="li-form">
          <div>
            <h2>LOGIN</h2>
          </div>
          <form onSubmit={handleLogin} name={name}>
            <div>
              <label htmlFor="username">
                <small>Username</small>
              </label>
              <input name="username" type="text" />
            </div>
            <div>
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input name="password" type="password" />
            </div>
            <div>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  backgroundColor: '#00ADB5',
                  borderRadius: 0,
                  '&:hover': {
                    backgroundColor: '#00ADB5',
                  },
                  width: 180,
                  height: 50,
                }}
                endIcon={<ArrowForwardIcon />}
              >
                {displayName}
              </Button>
              {/* <button type="submit">{displayName}</button> */}
            </div>
            {error && error.response && (
              <div className="auth-error"> {error.response.data} </div>
            )}
            <div className="li-reg">
              Not registered?{' '}
              <span onClick={() => history.push('/signup')}>
                Create an account
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    email: state.auth.email,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleLogin(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticate(username, password, formName));
    },
    handleSignup(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      const confirmPassword = evt.target.confirmPassword.value;
      const email = evt.target.email.value;

      if (password === confirmPassword) {
        dispatch(authenticateNewUser(username, password, email, formName));
      }
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
