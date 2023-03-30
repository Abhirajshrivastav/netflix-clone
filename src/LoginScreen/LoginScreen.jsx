import React , { useState } from 'react';
import "./LoginScreen.css"
import SignInScreen from '../SignInScreen/SignInScreen';

const LoginScreen = ({ onSignIn }) => {
    const [Signin, setSignin] = useState(false)

  return (
    <div className='loginScreen'>
        <div className="loginScreen__background">
            <img 
            className='loginScreen__logo'
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

            <button className='loginScreen__button'
            onClick={() => setSignin(true)}
            >
                Sign in
            </button>

            <div className="loginScreen__gradient"></div>
        </div>
        <div className="loginScreen__body">
            {Signin ? (
                <SignInScreen onSignIn={onSignIn} />
            ) : (
                <>
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.
    </h3>
    <div className="loginScreen__input">
        <form >
            <input type="email" 
            placeholder='Email Address'
            />
            <button className='loginScreen__getStarted'
            required
            onClick={() => setSignin(true)}
            >Get Started</button>
        </form>
    </div>
                </>
            )}
        </div>
    </div>
  )
}

export default LoginScreen;