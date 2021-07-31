import React,{useState,useEffect} from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import fire from '../../auth/Auth'
import './admin.css'
import Regular from './Regular'
import Irregular from './Irregular'

function SigninForm(props) {
    const {email, setEmail, password, setPassword, handleLogin} = props;
    return (
        <div className="signInForm">
                <form action="">
                    <p className="lebel">Username:</p>
                    <input 
                    type="email" 
                    placeholder="User Name" 
                    required
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    />
                    <p className="lebel">Password:</p>
                    <input 
                    type="password" 
                    placeholder="Password" 
                    required
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    />
                    <button type="submit" onSubmit={e => e.preventDefault} className="btn" onClick={handleLogin}> Sign In</button>
                </form>
            </div>
    )
}

export default function Admin() {
    //login 
    const [user, setUser]= useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const clearInput= () => {
        setEmail("");
        setPassword("")
    }
    const handleLogin = () =>{
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
        console.log("signedIn")
    }
    const authListener = () =>{

        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                clearInput()
                setUser(true)
                console.log("user avialbb")
            }
            else{
                setUser("");
                console.log('no user')
            }
        } )
    }
    

    useEffect(()=>{
        authListener()
    }, [])
    //login
    return (
        <section className="admin-section">
            <Switch>
                <Route path="/admin/uid" component={Regular} />
                <Route path="/admin/idpass" component={Irregular} />
                {user ? (
                    <div className="section">
                <button className="btn"><Link to="/admin/uid">UID</Link></button>
                <button className="btn"><Link to="/admin/idpass">ID Pass</Link></button>
        </div>
                ):(
                    <SigninForm 
                    email={email}
                    setEmail = {setEmail}
                    password ={password}
                    setPassword={setPassword}
                    handleLogin ={handleLogin}
                    />
                )}
            </Switch>

        </section>
    )
}
