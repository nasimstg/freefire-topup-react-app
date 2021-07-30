import React from 'react'
import { useHistory } from 'react-router-dom';
import updateIcon from '../../icons/updated.png'
import updateCancel from '../../icons/multiply.png'

export default function Regular() {
    let history = useHistory();
    return (
        <div className="orderRegular">
        <h1>Order List</h1>
        <button className="btn adminBtn" onClick={() => history.goBack()}>Back</button>
        <button className="btn adminBtn">Save</button>
        <table>
            <tr>
                <th>Order</th>
                <th>Name</th>
                <th>Addr</th>
                <th>Number</th>
                <th>Quantity</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>#610</td>
                <td>TestUser</td>
                <td>Sirajganj</td>
                <td>013xx-xxxx16</td>
                <td>100D</td>
                <td className="pending">Pending 
                <img src={updateIcon} alt="change" />
                <img src={updateCancel} alt="change" />
                </td>
            </tr>
            <tr>
                <td>#610</td>
                <td>TestUser</td>
                <td>Sirajganj</td>
                <td>013xx-xxxx16</td>
                <td>100D</td>
                <td className="cancel">Canceled</td>
            </tr>
            <tr>
                <td>#610</td>
                <td>TestUser</td>
                <td>Sirajganj</td>
                <td>013xx-xxxx16</td>
                <td>100D</td>
                <td className="done">Done</td>
            </tr>
            <tr>
                <td>#610</td>
                <td>TestUser</td>
                <td>Sirajganj</td>
                <td>013xx-xxxx16</td>
                <td>100D</td>
                <td className="done">Done</td>
            </tr>
            <tr>
                <td>#610</td>
                <td>TestUser</td>
                <td>Sirajganj</td>
                <td>013xx-xxxx16</td>
                <td>100D</td>
                <td className="done">Done</td>
            </tr>
            <tr>
                <td>#610</td>
                <td>TestUser</td>
                <td>Sirajganj</td>
                <td>013xx-xxxx16</td>
                <td>100D</td>
                <td className="done">Done</td>
            </tr>
            <tr>
                <td>#610</td>
                <td>TestUser</td>
                <td>Sirajganj</td>
                <td>013xx-xxxx16</td>
                <td>100D</td>
                <td className="done">Done</td>
            </tr>
            <tr>
                <td>#610</td>
                <td>TestUser</td>
                <td>Sirajganj</td>
                <td>013xx-xxxx16</td>
                <td>100D</td>
                <td className="done">Done</td>
            </tr>
            <tr>
                <td>#610</td>
                <td>TestUser</td>
                <td>Sirajganj</td>
                <td>013xx-xxxx16</td>
                <td>100D</td>
                <td>Done</td>
            </tr>
            <tr>
                <td>#610</td>
                <td>TestUser</td>
                <td>Sirajganj</td>
                <td>013xx-xxxx16</td>
                <td>100D</td>
                <td>Done</td>
            </tr>
        </table>
        </div>
    )
}
