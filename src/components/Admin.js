import React from "react"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashbord"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import '../pages/admin/admin.css'
import Regular from '../pages/admin/Regular'
import Irregular from '../pages/admin/Irregular'

function Admin() {
  return (
      <>
      <div style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute path="/admin" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/admin/uid" component={Regular} />
              <Route path="/admin/idpass" component={Irregular} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </>
  )
}

export default Admin