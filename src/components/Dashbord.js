import React, { useState } from "react"
import { useAuth } from "./contexts/AuthContext"
import { Link, Switch, useHistory, Route } from "react-router-dom"


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
        <div className="section" >
            <button className="btn" style={{margin:"5px"}}><Link to="/admin/topup">UID</Link></button>
            <button className="btn" style={{margin:"5px"}}><Link to="/admin/idpass">ID Pass</Link></button>
            <button className="btn" style={{margin:"5px"}}><Link to="/admin/update">Update</Link></button>
            <button className="btn" style={{margin:"5px"}}><Link to="/admin/promo">Promo</Link></button>
            <button className="btn" style={{margin:"5px"}}><Link to="/admin/weekly">Weekly</Link></button>
            <button className="btn" style={{margin:"5px"}}><Link to="/admin/monthly">Monthly</Link></button>
            <button className="btn" style={{margin:"5px"}}><Link to="/admin/airdrop">Airdrop</Link></button>
        </div>
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