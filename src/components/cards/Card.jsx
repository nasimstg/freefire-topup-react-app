import React from 'react'
import "./card.css"
import { Switch, Link} from 'react-router-dom'

const packages =[{
        "id":"1",
        "imgUrl":"https://picsum.photos/200",
        "name":"ডায়মন্ড টপ আপ",
        "range":"৳৪৫-৳২২৪০",
        "toLink":"/topup"
    },
    {
        "id":"2",
        "imgUrl":"https://picsum.photos/200",
        "name":"লেভেল আপ পাস",
        "range":"৳৪৫-৳২২৪০",
        "toLink":"/levelUpPass"
    },
    {
        "id":"3",
        "imgUrl":"https://picsum.photos/200",
        "name":"এয়ার্ড্রপ",
        "range":"৳৪৫-৳২২৪০",
        "toLink":"/airdrop"
    },
    {
        "id":"4",
        "imgUrl":"https://picsum.photos/200",
        "name":"উইক্লি",
        "range":"৳৪৫-৳২২৪০",
        "toLink":"/weekly"
    },
    {
        "id":"5",
        "imgUrl":"https://picsum.photos/200",
        "name":"মান্থলি",
        "range":"৳৪৫-৳২২৪০",
        "toLink":"/monthly"
    },
    {
        "id":"6",
        "imgUrl":"https://picsum.photos/200",
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
                        <div className="cardImg"><img src={res.imgUrl} alt="" /></div>
                        <div className="cardTitle"><p className="cardTitleText">{res.name}</p></div>
                        <div className="cardPriceRange"><p className="priceText"> {res.range} </p></div>
                    </div></Link>
                    </Switch>
            )
        })}

        </div>
    );
}
