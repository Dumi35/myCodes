import React from "react";
import Blob1 from "../images/blob1.svg"
import Puppies1 from "../images/puppies1.png"
import logo from '../images/logo.png';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom';


function Cats() {
    
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
                    cats
                    </Link>
                    
                    
                </div>
            </nav>
        </header>

        <div className="mainCatBody">      
            <div className="product">
            <img src={require("../images/starfire.jpg")}/>
            <p>Lorem ipsum dolor</p>
            <p>$500</p>
            </div>
            <div className="product">
            <img src={require("../images/puppies1.png")}/>
            <p>Lorem ipsum dolor is my friend <br /> poo</p>
            <p>$500</p>
            </div>
            <div className="product">
            <img src={require("../images/starfire.jpg")}/>
            </div>
            <div className="product">
            <img src={require("../images/starfire.jpg")}/>
            </div>
            <div className="product">
            <img src={require("../images/starfire.jpg")}/>
            </div>
            

            
        </div>

    </div>
  );
}

export default Cats;
