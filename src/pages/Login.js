import React, { Component } from 'react';


import twitterLogo from '../twitter.svg'
import './Login.css';

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    handlerSubmit = (event) => {
        event.preventDefault();

        const { username } = this.state;

        if (!username.length) return;

        localStorage.setItem('@GoTwitter:username', username);

        this.props.history.push('/timeline');
    };

    handleInputChange = (event) => {
        this.setState({ username: event.target.value });
    };

    render() {
        return (
            <div className="login-wrapper">
                <img src={twitterLogo} alt="GoTwitter"/>
                <form onSubmit={this.handlerSubmit}>
                    <input className="login-input" value={this.state.username} onChange={this.handleInputChange} placeholder="Nome de usuário"/>
                    <input className="login-input" value={this.state.password} onChange={this.handleInputChange} placeholder="senha"/>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    };
};