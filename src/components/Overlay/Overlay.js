import React, { Component } from 'react';

class Overlay extends Component {
    render() {
        const handleClickSignUpButton = this.props.handleClickSignUpButton,
            handleClickSignInButton = this.props.handleClickSignInButton;
        return (
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p className="overlay-description">
                            fgdfgdfgdfgd,<br/>
                            dfgdfggsfddddds.
                        </p>
                        <button
                            className="ghost form-button"
                            id="signIn"
                            onClick={handleClickSignInButton}
                        >Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p className="overlay-description">
                            fghgfhhghfgghfhf,<br/>
                            dfdhfhghghghghfsghfsghgf.
                        </p>
                        <button
                            className="ghost form-button"
                            id="signUp"
                            onClick={handleClickSignUpButton}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Overlay;