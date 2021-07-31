import React, {useState} from 'react'

export default function SigninForm(props) {
    
    return (
        <div className="signInForm">
                <form action="">
                    <p className="lebel">Username:</p>
                    <input type="text" placeholder="User Name" />
                    <p className="lebel">Password:</p>
                    <input type="text" placeholder="Password" />
                    <button type="submit" className="btn" onClick={() => this.state.setLoggedInStatus('false')}> Sign In</button>
                </form>
            </div>
    )
}
