import React from 'react'
import "./card.css"
import { Switch, Link} from 'react-router-dom'

const packages =[{
        "id":"1",
        "imgUrl":"https://i.ibb.co/SNx5998/topUp.jpg",
        "name":"ডায়মন্ড টপ আপ",
        "range":"৳৩০-৳৪৫০০",
        "toLink":"/topup"
    },
    {
        "id":"2",
        "imgUrl":"https://i.ibb.co/d2NJZHS/level-Up-Pass.jpg",
        "name":"লেভেল আপ পাস",
        "range":"৳২০০",
        "toLink":"/levelUpPass"
    },
    {
        "id":"3",
        "imgUrl":"https://i.ibb.co/tY8Wgc2/Promo-1.jpg",
        "name":"এয়ার্ড্রপ",
        "range":"৳৯০ থেকে শুরু",
        "toLink":"/airdrop" 
    },
    {
        "id":"4",
        "imgUrl":"https://i.ibb.co/PgKxgtT/weekly-Membership.jpg",
        "name":"উইক্লি",
        "range":"৳২০০",
        "toLink":"/weekly"
    },
    {
        "id":"5",
        "imgUrl":"https://i.ibb.co/sFnJT1C/month-Ly-1.jpg",
        "name":"মান্থলি",
        "range":"৳৬৮০",
        "toLink":"/monthly"
    },
    {
        "id":"6",
        "imgUrl":"https://i.ibb.co/6tbgCmP/Promo.jpg",
        "name":"প্রমো অফার",
        "range":"৳৪৫-৳২২৪০",
        "toLink":"/promoOffer"

    }];

export default function Card() {
    return(
        <div id="homeCard" className="homeCard">
        {packages.map((res, i)=>{
            const link = res.toLink;
            return(
                <Switch>
                    <Link to={link} className="cardlink"><div id="cardContainer" className="cardContainer" key={res.id}>
                        <div className="cardImg"><img id="cardImg" src={res.imgUrl} alt="" /></div>
                        <div className="cardTitle"><p className="cardTitleText">{res.name}</p></div>
                        <div className="cardPriceRange"><p className="priceText"> {res.range} </p></div>
                    </div></Link>
                    </Switch>
            )
        })}

        </div>
    );
}
