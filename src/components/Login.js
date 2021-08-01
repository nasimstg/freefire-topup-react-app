import React, { useRef, useState } from "react"
import { useAuth } from "./contexts/AuthContext"
import { useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/admin")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }
  return(
      <>
              <div className="signInForm">
                <form onSubmit={handleSubmit}>
                {error && <p>{error}</p>}
                    <p className="lebel">Username:</p>
                    <input 
                    type="email" 
                    placeholder="User Name" 
                    required
                    ref={emailRef}
                    />
                    <p className="lebel">Password:</p>
                    <input 
                    type="password" 
                    placeholder="Password" 
                    required
                    ref={passwordRef}
                    />
                    <button type="submit" disabled={loading} className="btn"> Sign In</button>
                </form>
            </div>
      </>
  )}