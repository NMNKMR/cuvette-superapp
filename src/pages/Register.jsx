import React from 'react'
import {Signup} from '../components/c.index';
import './css/Register.scss';

function Register() {
  return (
    <div id='account'>
        <div className="left-image">
            <h1><span>D</span>iscover new things on <span>S</span>uperapp</h1>
        </div>
        <div className="right-form">
            <Signup/>
        </div>
    </div>
  )
}

export default Register