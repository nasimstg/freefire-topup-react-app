import React, { Component } from 'react'
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
                    <p className="paymentTitle">নগদ</p>
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
                <>
                </>
            )
        }  
}


export default class Airdrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
          paymentMethod: '',
          value : 0,
          payShow : false
        };
      }
      changeHandler = event => {
        event.persist();
      
        let value = event.target.value;
      
        this.setState(prevState => ({
          item: { ...prevState.item,  [event.target.name]: value }
        }))
      };
    render() {
        return (
            <section className="topup-section">
                <div className="topupformTitle">
                    <h1>এয়ারড্রপ</h1>
                </div>
                <div className="mainForm">
                    <form action="">
                        <div className="name">
                            <p className="nameTitle">আপনার নামঃ </p>
                            <input type="text" placeholder="Your Name" name='name' />
                        </div>
                        <div className="name">
                            <p className="nameTitle">ঠিকানাঃ</p>
                            <input type="text" placeholder="Sirajganj" name='address' />
                        </div>
                        <div className="name">
                            <p className="nameTitle">গেম আইডিঃ</p>
                            <input type="text" placeholder="facebook number/gmail" name='uid' />
                        </div>
                        <div className="name">
                            <p className="nameTitle">গেম আইডি পাসওয়ার্ডঃ  </p>
                            <input type="text" placeholder="facebook/gmail password" name='uid' />
                        </div>
                        <div className="name">
                            <p className="nameTitle">আপনার এয়ারড্রপ এর মুল্যঃ  </p>
                            <input type="text" placeholder="100 Taka" name='uid' onChange={this.changeHandler}
                            />
                        </div>
                        <div className="name">
                            <p className="nameTitle">৳{this.state.value} টাকা </p>
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
                            <p className="nameTitle">যে নাম্বার থেকে টাকা পাঠাবেনঃ</p>
                            <input type="text" placeholder="123xx-xxxxxx" name='number' />
                        </div>
                        <button className="topupFormSubmitBtn" type="submit">কিনুন</button>
                    </form>
                </div>
            </section>
        )
    }
}
