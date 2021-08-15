import { withRouter } from "react-router-dom";
import app from '../../firebase'
import {React} from "react";
import { useEffect, useState } from "react";

function OrderPage(props){
    const [order, setOrder] = useState([])
    const urlId = props.match.params.id
    const ref = app.firestore().collection('order').doc(urlId)

    function getOrder(){
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
        <section>
            <div className="container">
                <p>Your Name: {order.name}</p>
            </div>
            <div className="container">
                <p>Your address: {order.address}</p>
            </div>
            <div className="container">
                <p>Your uid: {order.uid}</p>
            </div>
            <div className="container">
                <p>Your qnt: {order.qnt}</p>
            </div>
            <div className="container">
                <p>Your number: {order.number}</p>
            </div>
        </section>
    )
}

export default withRouter(OrderPage);