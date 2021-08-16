import React, { useEffect, useState } from 'react'
import app from '../firebase'
const {v4 : uuidv4} = require('uuid')

export default function Update() {
    const ref = app.firestore().collection("price")
    const [qnt, setQnt] = useState(0)
    const [newPrice, setNewPrice ] = useState(0)
    const [price, setPrice] =useState([])

    function getPrice(){
        ref.get().then((item)=>{
            const items = item.docs.map((doc) => doc.data());
            setPrice(items);
            console.log(price)
          });
    }
    function deletePrice(priceNew) {
        ref
          .doc(priceNew.id)
          .delete()
          .then(() => {
            setPrice((prev) =>
              prev.filter((element) => element.id !== priceNew.id)
            );
          })
          .catch((err) => {
            console.error(err);
          });
      }
    
      // EDIT FUNCTION
      function editPrice(updatedPrice) {
        ref
          .doc(updatedPrice.id)
          .update(updatedPrice)
          .then(() => {
            setPrice((prev) =>
              prev.map((element) => {
                if (element.id !== updatedPrice.id) {
                  return element;
                }
                return updatedPrice;
              })
            );
          })
          .catch((err) => {
            console.error(err);
          });
      }

    function pushNewPrice(priceNew){
        ref.doc(priceNew.id).set(priceNew).then(
            ()=>{
                priceNew((prev)=> [priceNew, ...prev])
            }
        ).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getPrice()
    }, [])
    return (
        <>
        <div style={{margin:"25px"}}>
            <input type="text" 
            style={{padding:"10px", margin:"10px", outline:"none"}} 
            placeholder=" Diamond"
            onChange={e=>setQnt(e.target.value)}
            />
            <input type="text" style={{padding:"10px", margin:"10px", outline:"none"}} placeholder="Price" 
            onChange={e=>setNewPrice(e.target.value)}
             />
        </div>
        <button className="btn" style={{marginLeft:"35px", textAlign: "center"}} onClick={()=>pushNewPrice({id: uuidv4(), price:newPrice, qnt:qnt})}>Add</button>

        <div className="priceList" style={{margin:"25px"}}>
            <h1>Added Diamond Price List</h1>
            {price.map((item, i)=>(
                <div style={{margin:"15px"}} key={item.id}>
                    <div >
                        <h2>Package: {i+1}</h2>
                        <p><strong>Price: </strong>{item.price} </p>
                        <input type="text" style={{padding:"5px", outline:"none"}} defaultValue={item.price} onChange={e=>setNewPrice(e.target.value)} />
                        <p><strong>Diamond: </strong>{item.qnt}</p>
                        <input type="text" style={{padding:"5px", outline:"none"}} defaultValue={item.qnt} onChange={e=>setQnt(e.target.value)} />
                    </div>
                    <button className="btn" style={{marginTop:"5px"}} onClick={()=> editPrice({id:item.id, price:newPrice, qnt:qnt})} >Update</button>
                    <button className="btn" style={{marginTop:"5px"}} onClick={()=> deletePrice({id:item.id})}>Delete</button>
                </div>
            ))}
        </div>

        </>
    )
}
