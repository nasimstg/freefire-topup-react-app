import React, { Component,useState } from 'react'
import bkash from '../../icons/bkash.png'
import nagad from '../../icons/nagad.png'
import rocket from '../../icons/rocket.png'

function PaymentDiv(props){
    let paymentMethodF = props.method;
    if(paymentMethodF ==="bkash")
        {
            return (
                <div className="paymentContainer">
                    <p className="paymentTitle">বিকাশ</p>
                    <p className="paymentNumber">যে নাম্বারে টাকা পাঠাবেনঃ  01307085310</p>
                    <p className="paymentDescription">Bkash Personal</p>
                </div>
            )
        }
        else if(paymentMethodF ==="nagad")
        {
            return (
                <div className="paymentContainer">
                    <p className="paymentTitle">নাগাদ</p>
                    <p className="paymentNumber">যে নাম্বারে টাকা পাঠাবেনঃ  01307085310</p>
                    <p className="paymentDescription">Nagad Personal</p>
                </div>
            )
        }
        else if(paymentMethodF === "rocket"){
            return(
                <div className="paymentContainer">
                    <p className="paymentTitle">রকেট</p> 
                    <p className="paymentNumber">যে নাম্বারে টাকা পাঠাবেনঃ  01307085310</p>
                    <p className="paymentDescription">Rocket Personal</p>
                </div>
            )
        }
        else{
            return(
                <div className="paymentSelectContainer">
                    <p className="paymentSelect">যেভাবে টাকা পাঠাবেন, তা নির্বাচন করুন। বিকাশ, নগদ অথবা রকেট আইকন এ ক্লিক করুন।</p>
                </div>
            )
        }  
}

export default class Levelup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          paymentMethod: '',
          qunatity : 0
        };
      }
    if(bkash){
        return(
            <>

            </>
        )
    }
    render() {
        return (
            <section className="topup-section">
                <div className="topupformTitle">
                    <h1>লেভেল আপ পাস</h1>
                </div>
                <div className="mainForm">
                    <form action="">
                        <div className="name">
                            <p>আপনার নামঃ </p>
                            <input type="text" placeholder="Your Name" name='name' />
                        </div>
                        <div className="name">
                            <p>ঠিকানাঃ</p>
                            <input type="text" placeholder="Sirajganj" name='address' />
                        </div>
                        <div className="name">
                            <p>গেম উআইডি কোডঃ</p>
                            <input type="text" placeholder="123456789" name='uid' />
                        </div>
                        <did className="paymentMethod">
                            <div className="paymentImg">
                                <img src={bkash} value="bkash" alt="bkash" onClick={ () => this.setState({paymentMethod:"bkash"}) } />
                            </div>
                            <div className="paymentImg">
                                <img src={nagad} value="nagad" alt="nagad" onClick={ () => this.setState({paymentMethod:"nagad"}) } />
                            </div>    
                            <div className="paymentImg">
                                <img src={rocket} value="rocket" alt="rocket" onClick={ () => this.setState({paymentMethod:"rocket"}) } />
                            </div>
                        </did>
                        <PaymentDiv method={this.state.paymentMethod} />
                        <div className="name">
                            <p>যে নাম্বার থেকে টাকা পাঠাবেনঃ</p>
                            <input type="text" placeholder="123xx-xxxxxx" name='number' />
                        </div>
                        <div className="totalCount">
                            <p className="paymentTitle">আপনাকে ২০০ টাকা পাঠাতে হবে।</p>
                        </div>
                        <button className="topupFormSubmitBtn" type="submit">কিনুন</button>
                    </form>
                </div>
            </section>
        )
    }
}
