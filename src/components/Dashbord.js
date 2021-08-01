import React, { useState } from "react"
import { useAuth } from "./contexts/AuthContext"
import { Link, Switch, useHistory } from "react-router-dom"
import Regular from "../pages/admin/Regular"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/admin/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
        <Switch>
        <div className="section">
            <button className="btn"><Link to="/admin/uid">UID</Link></button>
            <button className="btn"><Link to="/admin/idpass">ID Pass</Link></button>
        </div>
        <Switch>
            <Regular />
        </Switch>
        </Switch>
        <div>
            <h2>Porfile</h2>
            {error && <p>{error}</p>}
            <p>Email: {currentUser.email}</p>
        </div>
      <div className="w-100 text-center mt-2">
        <button className="btn" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </>
  )
}