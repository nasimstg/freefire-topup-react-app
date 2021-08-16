import { withRouter } from "react-router-dom";
import app from '../../firebase'
import {React} from "react";
import { useEffect, useState } from "react";
import './order.css'

function OrderPage(props){
    const [order, setOrder] = useState([])
    const [err, setErr] = useState('')
    const urlID =props.match.params.id

    async function getOrder(){
        const ref =await app.firestore().collection('order').doc(urlID)
        console.log(urlID)
        ref.get().then((docRef) => { 
            const i = docRef.data();
            setOrder(i)
         })
        .catch((error) => { console.log(error)})
    }

    


    useEffect(()=>{
        getOrder()
    }, [])
    return(
        <section className="orderPage"><div className="title">
                <p className="title_title">Order Submitted Succesfully</p>
                <p className="title_id"><strong>Order ID:</strong> {order.id}</p>
                <p className="title_des">Please Wait 10 to 30 Mins</p>
                <p className="titleStatus">done</p>
            </div>

            <div className="orderContainer">
                <p className="orderLebel">Name:</p>
                <p className="orderValue"> {order.name}</p>
            </div>
            <div className="orderContainer">
                <p className="orderLebel">Address:</p>
                <p className="orderValue"> {order.address}</p>
            </div>
            <div className="orderContainer">
                <p className="orderLebel">Uid:</p>
                <p className="orderValue"> {order.uid}</p>
            </div>
            <div className="orderContainer">
                <p className="orderLebel">Diamond:</p>
                <p className="orderValue"> {order.qnt}</p>
            </div>
            <div className="orderContainer">
                <p className="orderLebel">Number:</p>
                <p className="orderValue"> {order.number}</p>
            </div>
            <div className="orderContainer">
                <p className="orderLebel">Taka:</p>
                <p className="orderValue"> {order.value}</p>
            </div>
            <div className="orderHelp">
                <h1>Do you need colpleting your Order?</h1>
                <p>Number to sendMoney: <br /> bKash/Nagad/Rocket Personal: <strong>01314091006</strong></p>
                <p className="orderHelpDanger">Note: Only Send Money Available</p>
                <h1>Do you need to Call us?</h1>
                <p>Call Us : <strong>01722064433</strong></p>
                <h1>Send a Message in messenger:</h1>
                <p>Open Messenger</p>
            </div>
        </section>
    )
}
export default withRouter(OrderPage);