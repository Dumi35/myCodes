import React from "react";
import Blob1 from "../images/blob1.svg"
import Puppies1 from "../images/puppies1.png"
import logo from '../images/logo.png';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom';


function Dogs() {

    const [cart, setCart] = useState([{}])
    const [dogBowlCount, setDogBowlCount] = useState(0)
    const [dogHouseCount, setDogHouseCount] = useState(0)
    const items=[
        {name:"Dog Bowl",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi neque quae nesciunt vitae ipsum placeat ducimus d",
        price: "N4000",
        img: "../images/logo.png",
        count: dogBowlCount
    },
        {name:"Dog House",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi neque quae nesciunt vitae ipsum placeat ducimus d",
        price: "N10000",
        img: "../images/logo.png",
        count: dogHouseCount
    }
    ]

    
  return (
    <div className="">
     
        <header>
            <nav>
                <div className='logo'>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='navLinks'>
                    
                    <Link to ="/" >
                    Home
                    </Link>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <Link to ="/dogs" className='active'>
                    Dogs
                    </Link>
                    <Link to ="/cats" className='active'>
                    Cats
                    </Link>
                    
                    
                </div>
            </nav>
        </header>

        <div className="mainDogBody">  
            <div>
                <h1>The Dog Shop</h1>
                    <div className="mainShop">
                        {items.map((data) => {
                            return(
                            <div className="shopItem">
                                <img src={require("../images/logo.png")}/>
                                <div>
                                    <h2>{data.name}</h2>
                                    <p>{data.price}</p>
                                    <p>{data.description}</p>
                                    <button onClick={()=>setDogBowlCount(dogBowlCount+1)}>Add to Cart</button>
                                </div>
                            </div>
                        )})}
                        </div>


            </div>
{/* The CART */}
            <div>
                <h1>Cart</h1>
                {items.map((data) => {
                            return(
                            <div className="shopItem">
                                <img src={require("../images/logo.png")}/>
                                <div>
                                    
                                    <h2>{data.name}</h2>
                                    <p>{data.price}</p>
                                    <p>{data.count}</p>
                                    <p>Number</p>
                                    
                                    
                                </div>
                            </div>    
                )})}
            </div>
            
        </div>

    </div>
  );
}

export default Dogs;
