import React from "react"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashbord"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import '../pages/admin/admin.css'
import Regular from "../pages/admin/Regular"
import Irregular from '../pages/admin/Irregular'
import Update from "./Update"
import UpdateView from "./UpdateView"
import WeeklyOrder from "../pages/admin/WeeklyOrder"
import MonthlyOrder from "../pages/admin/MonthlyOrder"
import PromoOrder from "../pages/admin/PromoOrder"
import AirdropOrder from "../pages/admin/AirdropOrder"

function Admin() {
  return (
      <>
      <div style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/admin" component={Dashboard} />
            </Switch>
            <Switch>
            <Route path="/login" component={Login} />
            </Switch>
            <Switch>
                <Route path="/admin/topup" component={Regular} />
              </Switch>
              <Switch>
                <Route path="/admin/idpass" component={Irregular} />
              </Switch>
              <Switch>
                <Route path="/admin/update" component={Update} />
              </Switch>
              <Switch>
                <Route path="/admin/weekly" component={WeeklyOrder} />
              </Switch>
              <Switch>
                <Route path="/admin/monthly" component={MonthlyOrder} />
              </Switch>
              <Switch>
                <Route path="/admin/promo" component={PromoOrder} />
              </Switch>
              <Switch>
                <Route path="/admin/airdrop" component={AirdropOrder} />
              </Switch>
              <Switch>
                <Route path="/admin/update/id=:id" component={UpdateView} />
              </Switch>
          </AuthProvider>
        </Router>
      </div>
    </>
  )
}

export default Admin