import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            <div className="form-container sign-up-container">
                <form className="form" action="#">
                    <h1 className="form-title">Hello, Friend!</h1>

                    <input type="text" placeholder="text" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button className="form-button">sign up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;