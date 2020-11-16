import React from 'react'
import TwitterTitle from './TwitterTitle'
import TwitterForm from './TwiterForm'

import './twitter.css'

const TwitterLogin = () => {
    return(
        <div className="main-container">

        <img src="https://www.svgrepo.com/show/49959/twitter.svg"  width='35px'  alt=""></img>
        <TwitterTitle />
        <TwitterForm />
        <button>Log in</button>
        
        <ul>
            <a href="#"><li>Forgot password?</li></a>
            <a href="#"><li>Sign up for Twitter</li></a> 
        </ul>
        </div>
    )
}

export default TwitterLogin;