import React, { useRef, useState } from 'react';
import "./SignInScreen.css";

const SignInScreen = ({ onSignIn }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");

  const register = (e) => {
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && validateEmail(email) && password && validatePassword(password)) {
      onSignIn();
    } else {
      setError("Invalid email or password. Password must be at least 8 characters long.");
    }
  };

  // Function to validate email format
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // Function to validate password length
  function validatePassword(password) {
    return password.length >=8;
  }

  return (
      <div className='signinScreen'>
          <form>
              <h1>Sign In</h1>
              {error && <p className="error">{error}</p>}
              <input ref={emailRef} placeholder='Email' type="email"/>
              <input ref={passwordRef} placeholder='Password' type="password"/>

              <button type='submit' onClick={signIn}>
                  Sign In
              </button>
              <h4>
                <span className='signinScreen__gray'>New to Netflix? </span>
                <span className='signinScreen__link' onClick={register}>Sign up now.</span>
              </h4>
          </form>
      </div>
  )
}

export default SignInScreen;
