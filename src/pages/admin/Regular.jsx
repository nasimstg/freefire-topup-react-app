import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import updateIcon from '../../icons/updated.png'
import updateCancel from '../../icons/multiply.png'
import app from '../../firebase'

export default function Regular() {
    let history = useHistory();
    const[order, setOrder] = useState([])
    const ref = app.firestore().collection('order')

    async function getOrder(){
        
        ref.get().then((item) => {
            const items = item.docs.map((doc) => doc.data());
            setOrder(items);
        })
        console.log(order)
    }
    function editOrder(updatedOrder) {
        ref
          .doc(updatedOrder.id)
          .update(updatedOrder)
          .then(() => {
            setOrder((prev) =>
              prev.map((element) => {
                if (element.id !== updatedOrder.id) {
                  return element;
                }
                return updatedOrder;
              })
            );
          })
          .catch((err) => {
            console.error(err);
          });
      }

    useEffect(()=>{
        getOrder()
    }, [])
    return (
        <div className="orderRegular">
        <h1>Order List</h1>
        <button className="btn adminBtn" onClick={() => history.goBack()}>Back</button>
        <button className="btn adminBtn">Save</button>
        <table>
            <tr>
                <th>Si No</th>
                <th>Date</th>
                <th>Order</th>
                <th>Name</th>
                <th>Addr</th>
                <th>Number</th>
                <th>Quantity</th>
                <th>Status</th>
            </tr>
            {order.map((res, i)=>{
                return <tr>
                    <td>{i+1}</td>
                    <td>{res.timestamp}</td>
                    <td>#{res.id}</td>
                    <td>{res.name}</td>
                    <td>{res.address}</td>
                    <td>{res.number}</td>
                    <td>{res.qnt}D</td>
                    <td className={res.pending }>{res.pending && <p>pending</p>}
                    {!res.pending && !res.canceled && <p>Done</p>}
                    {res.canceled && <p>Canceled</p>} 
                    <img src={updateIcon} alt="done" onClick={()=>editOrder({timestamp: res.timestamp,name:res.name,value:res.value,pending:false, canceled:false, qnt:res.qnt, address:res.address, number:res.number, uid:res.uid, id:res.id})} />
                    <img src={updateCancel} alt="cancel" onClick={()=> editOrder({timestamp: res.timestamp,name:res.name,value:res.value,pending:false, canceled:true, qnt:res.qnt, address:res.address, number:res.number, uid:res.uid, id:res.id})} /> 
                    </td>
                </tr>
            })}
        </table>
        </div>
    )
}
