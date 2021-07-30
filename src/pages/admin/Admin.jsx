import React,{useState} from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import './admin.css'
import SigninForm from './SigninForm'
import Regular from './Regular'
import Irregular from './Irregular'

export default function Admin() {
    const [isLoggedIn, setLoggedInStatus] = useState(true);
    let signinform;
    if(isLoggedIn === false){
        return(
            <SigninForm />
        )
    }
    return (
        <section className="admin-section">
                <Switch>
                <Route path="/admin/uid" component={Regular} />
                </Switch>
                <Switch>
                <Route path="/admin/idpass" component={Irregular} />
                </Switch>
            <div className="section">
                <button className="btn"><Link to="/admin/uid">UID</Link></button>
                <button className="btn"><Link to="/admin/idpass">ID Pass</Link></button>
            </div>

        </section>
    )
}
