import React, {Component} from 'react';
import reactLogo from './react-logo.svg';
import backendlessLogo from './backendless-logo.svg';
import SignIn from './components/SingIn/SingIn';
import SignUp from './components/SignUp/SignUp';
import Overlay from './components/Overlay/Overlay';
import './App.css';

import Backendless from 'backendless';

const APP_ID = '05F3AFA7-91ED-5265-FF18-91DB2AC36500';
const API_KEY = 'A911EFF1-BDAA-49FB-9761-6BC26B3D5189';
Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            message: '',
            error: null,
            rightPanelActive: false
        };
        this.handleClickSignUpButton = this.handleClickSignUpButton.bind(this);
        this.handleClickSignInButton = this.handleClickSignInButton.bind(this);
    }


    handleClickSignUpButton(){
        this.setState({
            rightPanelActive: true,
        });
    }

    handleClickSignInButton() {
        this.setState({
            rightPanelActive: false,
        });
    }

    componentDidMount() {
        Backendless.Data.of('TestTable').save({foo: 'bar'})
            .then(obj => {
                const message = 'A data object has been saved in Backendless. Check \'TestTable\' in Backendless Console.' +
                    `ObjectId = ${obj.objectId}`

                this.setState({message, loading: false})
            })
            .catch(error => this.setState({error: `Got an error - ${error}`, loading: false}))
    }

    render() {
        const { error, loading, message, rightPanelActive } = this.state;

        return (
            <div className="App">
                {/*<div className="App-header">*/}
                {/*    <img src={reactLogo} className="react-logo" alt="logo"/>*/}
                {/*    <img src={backendlessLogo} className="backendless-logo" alt="logo"/>*/}
                {/*    <h2>Welcome to Backendless with React</h2>*/}
                {/*    <h2>{loading ? 'Loading...' : message || error} </h2>*/}
                {/*</div>*/}
                {/*<p className="App-intro">*/}
                {/*    {loading ? 'Loading...' : message || error}*/}
                {/*</p>*/}

                <div
                    className={`container ${rightPanelActive ? `right-panel-active` : ``}`}
                    id="container">
                    <SignIn />
                    <SignUp />
                    <Overlay
                        handleClickSignInButton={this.handleClickSignInButton}
                        handleClickSignUpButton={this.handleClickSignUpButton}
                    />
                </div>
            </div>
        );
    }
}

export default App;
                