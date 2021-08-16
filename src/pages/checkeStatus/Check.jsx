import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import './check.css'

export default function Check() {
    const [query, setQuery] = useState('')

    return (
        <section className="checkSection">
            <div className="checkForm">
                <div className="checkInput">
                    <p className="checkLebel">Order Id:</p>
                    <input type="text" onChange={(e)=> setQuery(e.target.value) } />
                </div>
                <button className="btn checkBtn" ><Link to={"/topup/newOrderId="+ query} >Check</Link></button>
            </div>
        </section>
    )
}
