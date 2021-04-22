import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className="login">
            <h1>I'm the login page</h1>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
