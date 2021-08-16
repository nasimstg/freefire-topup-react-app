import React, {useEffect, useState } from 'react'
import {Route } from "react-router-dom"
import './topup.css'
import bkash from '../../icons/bkash.png'
import nagad from '../../icons/nagad.png'
import rocket from '../../icons/rocket.png'
import diamond from '../../icons/diamond.png'
import app from '../../firebase'
import { useHistory } from 'react-router'
const {v4 : uuidv4} = require('uuid')


export default function Topup() {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [uid, setUid] = useState("");
    const [number, setNumber] = useState("");
    const [qnt, setQnt] = useState(0);
    const [value, setValue] = useState(0);
    const ref = app.firestore().collection('order');
    const priceRef = app.firestore().collection('price');
    const [price, setPrice]=useState([])
    const history = useHistory();

    function pushOrder(newOrder){
        ref.doc(newOrder.id).set(newOrder).then(
            ()=>{
                newOrder((prev)=> [newOrder, ...prev])
            }
        ).catch((err)=>{
            console.log(err)
        })
        history.push(`/topup/newOrderId=${newOrder.id}`)    
    }
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
      }
    function getPrice(){
        priceRef.get().then((item)=>{
            const items = item.docs.map((doc) => doc.data());
            setPrice(items);
          });
    }
    function priceClicked(obj){
        setQnt(obj.qnt)
        setValue(obj.value)
    }
    useEffect(()=>{
        getPrice();
    }, [])

        return (
            <section className="topup-section">
                <div className="topupformTitle">
                    <h1>ডাইমন্ড টপ আপ</h1>
                </div>
                <div className="mainForm">
                        <div className="name">
                            <p className="nameTitle">আপনার নামঃ </p>
                            <input type="text" placeholder="Your Name" name='name' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="name">
                            <p className="nameTitle">ঠিকানাঃ</p>
                            <input type="text" placeholder="Sirajganj" name='address' onChange={(e) =>setAddress(e.target.value)} />
                        </div>
                        <div className="name">
                            <p className="nameTitle">গেম উআইডি কোডঃ</p>
                            <input type="text" placeholder="123456789" name='uid' onChange={(e) =>setUid(e.target.value) }/>
                        </div>
                        <div className="name">
                            <p className="nameTitle">কত ডাইমন্ড নিতে চান?</p>
                            <div className="diamondCount">
                                {price.map((item)=>(
                                    <div className="25 diamnodCard renderd"  onClick={()=> priceClicked({qnt:item.qnt, value:item.price})} key={item.id}>
                                        <p className="diamondCountTitle">{item.qnt}<img src={diamond} alt="" /></p>
                                        <p className="diamondValue">৳{item.price}</p>
                                    </div>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="quantityShow">
                                <div className="paymentSelectContainer">
                                <p className="paymentSelect" style={{marginTop:25,marginBottom:25 }}>আপনি {qnt} ডাইমন্ড নিতে চাচ্ছেন। আপনাকে {value} টাকা পাঠতে হবে। </p>
                                </div>
                        </div>

                        <div className="paymentMethod">
                            <div className="paymentImg">
                                <img src={bkash} value="bkash" alt="bkash" />
                            </div>
                            <div className="paymentImg">
                                <img src={nagad} value="nagad" alt="nagad" />
                            </div>    
                            <div className="paymentImg">
                                <img src={rocket} value="rocket" alt="rocket" />
                            </div>
                        </div>
                        <div className="name">
                            <p className="nameTitle">যে নাম্বার থেকে টাকা পাঠাবেনঃ</p>
                            <input type="text" placeholder="123xx-xxxxxx" name='number' onChange={(e) =>setNumber(e.target.value)} />
                        </div>
                        <button className="topupFormSubmitBtn" onClick={()=> pushOrder({timestamp: formatDate(Date.now()),name,value,pending:true, canceled:false, qnt, address, number, uid, id:uuidv4()})}>কিনুন</button>
                </div>
            </section>
        )
}
